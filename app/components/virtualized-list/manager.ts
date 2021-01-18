/* eslint-disable no-useless-constructor */
import { Alignment } from './constants';

type ILayout = { offset: number; size: number };

export type Range = { startIndex: number; stopIndex: number };

export class VariableListLayoutManager<ItemT> {
  private lastMeasuredIndex = -1;
  public layouts = new Map<number, { offset: number; size: number }>();

  constructor(
    private readonly countGetter: () => number,
    private sizeGetter: (index: number) => number,
    private estimatedSize: number,
  ) {}

  public updateConfig({
    sizeGetter,
    estimatedSize,
  }: {
    sizeGetter?: (index: number) => number;
    estimatedSize?: number;
  }) {
    if (sizeGetter != null) {
      this.sizeGetter = sizeGetter;
    }

    if (estimatedSize != null) {
      this.estimatedSize = estimatedSize;
    }
  }

  public getLastMeasuredIndex() {
    return this.lastMeasuredIndex;
  }

  // 索引 layout 改变，引起其后所有值都将需要被计算
  public resetMeasuredIndex(index: number) {
    this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, index - 1);
  }

  // 获取最后计算节点
  private getLayoutOfLastMeasured(): ILayout {
    if (this.lastMeasuredIndex >= 0) {
      return this.layouts.get(this.lastMeasuredIndex);
    } else {
      return { offset: 0, size: 0 };
    }
  }

  // 获取顺排数组内指定索引的位置和大小
  public getLayoutByIndex(index: number): ILayout {
    const count = this.countGetter();
    if (index < 0 || index >= count) {
      throw Error(`Requested index ${index} is outside of range [0, ${count}]`);
    }

    // 在已计算之内的，直接取直，否则需要继续往后计算
    if (index > this.lastMeasuredIndex) {
      const lastMeasuredLayout = this.getLayoutOfLastMeasured();
      let offset = lastMeasuredLayout.offset + lastMeasuredLayout.size;

      for (let i = this.lastMeasuredIndex + 1; i <= index; i++) {
        const size = this.sizeGetter(i);

        if (isNaN(size)) {
          throw Error(`Invalid size returned for index ${i} of value ${size}`);
        }

        this.layouts.set(i, { offset, size });

        offset += size;
      }

      this.lastMeasuredIndex = index; // for next calculate
    }

    return this.layouts.get(index);
  }

  // 预期总长度，此值受最后计算值的影响，会逐步趋于最终值
  public getEstimatedTotalSize(): number {
    const lastMeasuredLayout = this.getLayoutOfLastMeasured();
    const lastMeasuredTotalSize =
      lastMeasuredLayout.offset + lastMeasuredLayout.size;

    let unmeasuredSize = 0;
    for (
      let index = this.lastMeasuredIndex + 1, count = this.countGetter();
      index < count;
      index++
    ) {
      const savedLayout = this.layouts.get(index);
      if (savedLayout) {
        unmeasuredSize += savedLayout.size;
      } else {
        unmeasuredSize += this.estimatedSize;
      }
    }

    return lastMeasuredTotalSize + unmeasuredSize;
  }

  // 对已经排序的数据，进行二分搜索，直到找到最靠近目标值的索引值
  private binarySearch({
    low,
    high,
    offset,
  }: {
    low: number;
    high: number;
    offset: number;
  }) {
    let middle = 0;
    let currentOffset = 0;

    while (low <= high) {
      middle = low + Math.floor((high - low) / 2);
      currentOffset = this.getLayoutByIndex(middle).offset;

      if (currentOffset === offset) {
        return middle;
      } else if (currentOffset < offset) {
        low = middle + 1;
      } else if (currentOffset > offset) {
        high = middle - 1;
      }
    }

    if (low > 0) {
      return low - 1;
    }

    return 0;
  }

  // 对未排序的数据，先进行指数 O(log n) 排序，当目标值小于或者等于排序后的值，则进行二分搜索
  private exponentialSearch({
    index,
    offset,
  }: {
    index: number;
    offset: number;
  }) {
    let interval = 1;
    const count = this.countGetter();

    while (index < count && this.getLayoutByIndex(index).offset < offset) {
      index += interval;
      interval *= 2;
    }

    return this.binarySearch({
      high: Math.min(index, count - 1),
      low: Math.floor(index / 2),
      offset,
    });
  }

  private findNearestItem(offset: number) {
    if (isNaN(offset)) {
      throw Error(`Invalid offset ${offset} specified`);
    }

    offset = Math.max(0, offset);

    const lastMeasuredLayout = this.getLayoutOfLastMeasured();
    const lastMeasuredIndex = Math.max(0, this.lastMeasuredIndex);

    if (lastMeasuredLayout.offset >= offset) {
      return this.binarySearch({ high: lastMeasuredIndex, low: 0, offset });
    } else {
      return this.exponentialSearch({ index: lastMeasuredIndex, offset });
    }
  }

  public calculateRange(options: {
    offset: number;
    windowSize: number;
    overscan?: number;
  }): Range {
    const estimatedTotalSize = this.getEstimatedTotalSize();
    if (estimatedTotalSize === 0) {
      return { startIndex: -1, stopIndex: -1 };
    }
    let { overscan = 0, windowSize, offset } = options;

    let startIndex = this.findNearestItem(offset);

    if (typeof startIndex === 'undefined') {
      throw Error(`Invalid offset ${offset} specified`);
    }

    const datum = this.getLayoutByIndex(startIndex);
    offset = datum.offset + datum.size;

    let stopIndex = startIndex;
    const limitIndex = this.countGetter() - 1;

    const maxOffset = offset + windowSize; // 计算最大偏移量

    while (offset < maxOffset && stopIndex < limitIndex) {
      stopIndex++;
      offset += this.getLayoutByIndex(stopIndex).size;
    }

    if (overscan) {
      startIndex = Math.max(0, startIndex - overscan);
      stopIndex = Math.min(stopIndex + overscan, limitIndex);
    }

    return { startIndex, stopIndex };
  }

  public getUpdatedOffsetForIndex(options: {
    targetIndex: number;
    windowSize: number;
    scrollOffset: number;
    alignment?: keyof typeof Alignment;
  }): number {
    const {
      alignment = 'auto',
      targetIndex,
      windowSize,
      scrollOffset,
    } = options;

    if (windowSize <= 0) {
      return 0;
    }

    const datum = this.getLayoutByIndex(targetIndex);
    const maxOffset = datum.offset;
    const minOffset = maxOffset - windowSize + datum.size;

    let idealOffset: number;

    switch (alignment) {
      case Alignment.end:
        idealOffset = minOffset;
        break;
      case Alignment.center:
        idealOffset = maxOffset - (windowSize - datum.size) / 2;
        break;
      case Alignment.start:
        idealOffset = maxOffset;
        break;
      default:
        idealOffset = Math.max(minOffset, Math.min(maxOffset, scrollOffset));
    }

    const estimatedTotalSize = this.getEstimatedTotalSize();

    return Math.max(0, Math.min(estimatedTotalSize - windowSize, idealOffset));
  }
}

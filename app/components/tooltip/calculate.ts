import { MeasuredResult } from '../../utils/helpers';
import { IPosition, IPlace } from './constants';

interface CalculateOptions {
  windowSize: { height: number; width: number };
  anchorLayout: MeasuredResult;
  popoverSize: { height: number; width: number };
  position?: IPosition;
  place?: IPlace;
}

export const calculate = (options: CalculateOptions) => {
  const {
    windowSize: { height: windowHeight, width: windowWidth },
    anchorLayout: {
      height: anchorHeight,
      width: anchorWidth,
      pageX: anchorX,
      pageY: anchorY,
    },
    popoverSize: { height: popoverHeight, width: popoverWidth },
    position,
    place = 'center',
  } = options;

  const remainderSizer = {
    top: anchorY,
    right: Math.max(windowWidth - anchorX - anchorWidth, 0),
    bottom: Math.max(windowHeight - anchorY - anchorHeight, 0),
    left: anchorX,
  };

  const remainderRater = {
    top: remainderSizer.top / popoverHeight,
    right: remainderSizer.right / popoverWidth,
    bottom: remainderSizer.bottom / popoverHeight,
    left: remainderSizer.left / popoverWidth,
  };

  const enoughPlacer = {
    top: remainderSizer.top + anchorHeight / 2 >= popoverHeight / 2,
    right: remainderSizer.right + anchorWidth / 2 >= popoverWidth / 2,
    bottom: remainderSizer.bottom + anchorHeight / 2 >= popoverHeight / 2,
    left: remainderSizer.left + anchorWidth / 2 >= popoverWidth / 2,
  };

  // best position
  let majorPosition: IPosition;
  let majorPositionValue = 0;
  if (position && remainderRater[position] >= 1) {
    majorPosition = position;
  } else {
    majorPosition = Object.keys(remainderRater).reduce((prev, current) => {
      return remainderRater[prev] > remainderRater[current] ? prev : current;
    }) as IPosition;
  }

  const isVertical = majorPosition === 'top' || majorPosition === 'bottom';

  majorPositionValue =
    remainderSizer[majorPosition] - (isVertical ? popoverHeight : popoverWidth);

  let minorPosition: IPosition;
  let minorPositionValue = 0;
  if (isVertical) {
    if (
      enoughPlacer.right &&
      (!enoughPlacer.left || (enoughPlacer.left && place === 'start'))
    ) {
      minorPosition = 'left';
      minorPositionValue = remainderSizer.left;
    } else if (
      enoughPlacer.left &&
      (!enoughPlacer.right || (enoughPlacer.right && place === 'end'))
    ) {
      minorPosition = 'right';
      minorPositionValue = remainderSizer.right;
    } else {
      minorPosition = 'left';
      minorPositionValue =
        remainderSizer.left + anchorWidth / 2 - popoverWidth / 2;
    }
  } else {
    if (
      enoughPlacer.bottom &&
      (!enoughPlacer.top || (enoughPlacer.top && place === 'start'))
    ) {
      minorPosition = 'top';
      minorPositionValue = remainderSizer.top;
    } else if (
      enoughPlacer.top &&
      (!enoughPlacer.bottom || (enoughPlacer.bottom && place === 'end'))
    ) {
      minorPosition = 'bottom';
      minorPositionValue = remainderSizer.bottom;
    } else {
      minorPosition = 'top';
      minorPositionValue =
        remainderSizer.top + anchorHeight / 2 - popoverHeight / 2;
    }
  }

  return {
    majorPosition,
    majorPositionValue,
    minorPosition,
    minorPositionValue,
    isVertical,
  };
};

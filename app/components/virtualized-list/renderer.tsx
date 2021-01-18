import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { areEqual } from './areEqual';
import { LayoutChangeEvent } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface RendererProps {
  offset: number;
  size: number;
  horizontal?: boolean;
  onSizeChanged?: (size: number) => void;
  sizeChangedTiming?: Animated.WithTimingConfig;
  mountedTiming?: Animated.WithTimingConfig;
  children: React.ReactElement;
}

export interface RendererRef {
  setOffset: (offset: number) => void;
}

const RendererCore = forwardRef<RendererRef, RendererProps>((props, ref) => {
  const {
    offset,
    size,
    horizontal = false,
    onSizeChanged,
    children,
    sizeChangedTiming,
    mountedTiming,
  } = props;

  const animatedOffset = useSharedValue(offset);
  const animatedOpacity = useSharedValue(onSizeChanged ? 0 : 1);

  const safeRef = useRef<boolean>(true);
  const viewRef = useRef();

  const style = useAnimatedStyle(() => {
    return {
      top: withTiming(
        animatedOffset.value,
        sizeChangedTiming || { duration: 0 },
      ),
      opacity: withTiming(
        animatedOpacity.value,
        mountedTiming || { duration: 200 },
      ),
    };
  });

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const { height, width } = e.nativeEvent.layout;
    if (safeRef.current && typeof onSizeChanged === 'function') {
      animatedOpacity.value = 1;
      const nextSize = horizontal ? width : height;
      if (size !== nextSize) {
        onSizeChanged(nextSize);
      }
    }
  }, []);

  useEffect(
    () => () => {
      safeRef.current = false;
    },
    [],
  );

  useImperativeHandle(ref, () => ({
    setOffset: (nextOffset) => {
      animatedOffset.value = nextOffset;
    },
  }));

  return (
    <Animated.View
      ref={viewRef}
      style={[{ position: 'absolute', left: 0 }, style]}
      onLayout={onSizeChanged ? onLayout : undefined}
    >
      {children}
    </Animated.View>
  );
});

export const Renderer = memo(RendererCore, areEqual) as typeof RendererCore;

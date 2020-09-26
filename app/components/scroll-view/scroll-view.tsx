import React, { forwardRef, memo, useCallback, useRef } from 'react';
import {
  NativeViewGestureHandler,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { ScrollViewProps } from './scroll-view.props';
import { useGestureHandler } from './helpers';
import { styles } from './scroll-view.styles';
import { ViewStyle } from 'react-native';
import { useLayoutedEffect } from '../../utils/hooks/useLayoutedEffect';

const noop = () => null;

export const ScrollView = memo(
  forwardRef(
    (props: ScrollViewProps, ref?: React.RefObject<Animated.ScrollView>) => {
      const {
        onScroll = noop,
        onBeginDrag = noop,
        onEndDrag = noop,
        onMomentumBegin = noop,
        onMomentumEnd = noop,
        horizontal = false,
        // for refresh
        isRefreshing,
        onRefresh,
        refreshSize = 100,
        refreshDuration = 1200,
        refreshTimingConfig,
        RefreshComponent,
      } = props;

      const scrollOffset = useSharedValue(0);

      const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
          scrollOffset.value = event.contentOffset.y;
          onScroll(event);
        },
        onBeginDrag,
        onEndDrag,
        onMomentumBegin,
        onMomentumEnd,
      });

      const translate = useSharedValue(0);
      const translateStart = useSharedValue(-1);
      const translateStyle = useAnimatedStyle(() => {
        return {
          transform: [{ translateY: translate.value }],
        };
      });
      const refreshViewStyle = useAnimatedStyle(() => {
        return { height: translate.value } as ViewStyle;
      });

      const [panGestureRef, setPanGestureEnabled] = useGestureHandler<
        PanGestureHandler
      >();
      const [scrollGestureRef, setScrollGestureEnabled] = useGestureHandler<
        NativeViewGestureHandler
      >();

      /**
       * actions
       */
      const refreshingTimerRef = useRef<NodeJS.Timer>();
      const toRelease = useCallback(() => {
        if (refreshingTimerRef.current) {
          return;
        }
        translate.value = withTiming(
          0,
          refreshTimingConfig || {
            duration: 300,
            easing: Easing.bezier(0.33, 0.01, 0, 1),
          },
          () => {
            setTimeout(() => {
              setScrollGestureEnabled(true);
              setPanGestureEnabled(true);
            }, 0);
          },
        );
      }, [refreshTimingConfig]);

      const handleToRefresh = useCallback(
        (callback?: (isCancelled: boolean) => void) => {
          translate.value = withTiming(
            refreshSize,
            refreshTimingConfig || {
              duration: 300,
              easing: Easing.bezier(0.33, 0.01, 0, 1),
            },
            callback,
          );
        },
        [refreshTimingConfig],
      );

      const toRefresh = useCallback(() => {
        clearTimeout(refreshingTimerRef.current);
        handleToRefresh(() => {
          refreshingTimerRef.current = setTimeout(() => {
            refreshingTimerRef.current = undefined;
            !isRefreshing && toRelease();
          }, refreshDuration);
        });
      }, [isRefreshing, refreshDuration]);

      // after scollview mounted, set animation
      const onLayout = useLayoutedEffect(() => {
        isRefreshing ? toRefresh() : toRelease();
      }, [isRefreshing]);

      const onGestureEvent = useAnimatedGestureHandler({
        onActive: (event) => {
          const translationValue = event.translationY;
          if (scrollOffset.value > 0 || translationValue <= 0) {
            return null;
          }

          if (translateStart.value !== -1) {
            translate.value = Math.max(
              0,
              (translationValue - translateStart.value) / 2,
            );
            setScrollGestureEnabled(false);
          } else {
            translateStart.value = translationValue;
          }
        },
        onEnd: () => {
          setPanGestureEnabled(false);
          if (translate.value >= refreshSize) {
            if (typeof onRefresh === 'function') {
              handleToRefresh();
              onRefresh();
            } else {
              toRelease();
            }
          } else {
            toRelease();
          }
          translateStart.value = -1;
        },
      });

      return (
        <PanGestureHandler
          ref={panGestureRef}
          simultaneousHandlers={scrollGestureRef}
          onGestureEvent={onGestureEvent}
          activeOffsetX={10000}
          activeOffsetY={10}
        >
          <Animated.View style={{ flex: 1 }}>
            <Animated.View style={[styles.refreshView, refreshViewStyle]}>
              {typeof RefreshComponent === 'function' && RefreshComponent()}
            </Animated.View>
            <NativeViewGestureHandler
              ref={scrollGestureRef}
              simultaneousHandlers={panGestureRef}
              disallowInterruption
            >
              <Animated.ScrollView
                onLayout={onLayout}
                style={translateStyle}
                bounces={false}
                ref={ref}
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                horizontal={horizontal}
              >
                {props.children}
              </Animated.ScrollView>
            </NativeViewGestureHandler>
          </Animated.View>
        </PanGestureHandler>
      );
    },
  ),
);

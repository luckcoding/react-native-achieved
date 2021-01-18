import React, { forwardRef, memo, useCallback, useEffect, useRef } from 'react';
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
} from 'react-native-reanimated';
import { ScrollViewProps } from './scroll-view.props';
import { useGestureHandler, withAsyncTiming } from './helpers';
import { styles } from './scroll-view.styles';
import { ViewStyle } from 'react-native';

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
      const toRelease = useCallback(async () => {
        if (refreshingTimerRef.current) {
          return;
        }
        await withAsyncTiming(
          translate,
          0,
          refreshTimingConfig || {
            duration: 300,
            easing: Easing.bezier(0.33, 0.01, 0, 1),
          },
        );
        setScrollGestureEnabled(true);
        setPanGestureEnabled(true);
      }, [refreshTimingConfig]);

      const toRefresh = useCallback(async () => {
        clearTimeout(refreshingTimerRef.current);
        await withAsyncTiming(
          translate,
          refreshSize,
          refreshTimingConfig || {
            duration: 300,
            easing: Easing.bezier(0.33, 0.01, 0, 1),
          },
        );

        refreshingTimerRef.current = setTimeout(() => {
          refreshingTimerRef.current = undefined;
          !isRefreshing && toRelease();
        }, refreshDuration);
      }, [isRefreshing, refreshDuration, refreshTimingConfig]);

      // after scollview mounted, set animation
      const onLayout = useEffect(() => {
        isRefreshing ? toRefresh() : toRelease();
      }, [isRefreshing]);

      const onGestureEvent = useAnimatedGestureHandler({
        onActive: (event) => {
          const translationValue = event.translationY;
          if (scrollOffset.value > 0 || translationValue <= 0) {
            return null;
          }

          translate.value = Math.floor(translationValue / 2);
        },
        onEnd: () => {
          setPanGestureEnabled(false);
          if (
            translate.value >= refreshSize &&
            typeof onRefresh === 'function'
          ) {
            toRefresh();
            onRefresh();
          } else {
            toRelease();
          }
        },
      });

      return (
        <PanGestureHandler
          ref={panGestureRef}
          simultaneousHandlers={scrollGestureRef}
          onGestureEvent={onGestureEvent}
          activeOffsetX={10000}
          activeOffsetY={20}
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

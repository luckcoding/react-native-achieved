import React, { forwardRef, memo } from 'react';
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
import { Text } from '../text/text';
import { useGestureHandler } from './helpers';
import { styles } from './scroll-view.styles';
import { ViewStyle, I18nManager } from 'react-native';

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
      } = props;

      const scrollOffset = useSharedValue(0);

      const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
          scrollOffset.value = horizontal
            ? event.contentOffset.x
            : event.contentOffset.y;
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
          transform: [
            horizontal
              ? {
                  translateX: translate.value,
                }
              : {
                  translateY: translate.value,
                },
          ],
        };
      });
      const refreshViewStyle = useAnimatedStyle(() => {
        return horizontal
          ? {
              width: translate.value,
              top: 0,
              bottom: 0,
            }
          : ({
              height: translate.value,
              top: 0,
              left: 0,
              right: 0,
            } as ViewStyle);
      });

      const [panGestureRef, setPanGestureEnabled] = useGestureHandler<
        PanGestureHandler
      >();
      const [scrollGestureRef, setScrollGestureEnabled] = useGestureHandler<
        NativeViewGestureHandler
      >();

      const hide = () => {
        translate.value = withTiming(
          0,
          { duration: 300, easing: Easing.bezier(0.33, 0.01, 0, 1) },
          () => {
            setTimeout(() => {
              setScrollGestureEnabled(true);
              setPanGestureEnabled(true);
            }, 0);
          },
        );
      };

      const onGestureEvent = useAnimatedGestureHandler({
        onActive: (event) => {
          console.log(scrollOffset.value);
          if (scrollOffset.value > 0) {
            return null;
          }

          const translation = horizontal
            ? event.translationX
            : event.translationY;

          console.log(translation);

          if (I18nManager.isRTL) {
            if (translation >= 0) {
              return null;
            }
          } else {
            if (translation <= 0) {
              return null;
            }
          }

          console.log(translation);

          if (translateStart.value !== -1) {
            translate.value = Math.max(
              0,
              (translation - translateStart.value) / 2,
            );
            setScrollGestureEnabled(false);
          } else {
            translateStart.value = translation;
          }
        },
        onEnd: () => {
          // setPanGestureEnabled(false)
          if (translate.value >= 100) {
            translate.value = withTiming(
              100,
              { duration: 300, easing: Easing.bezier(0.33, 0.01, 0, 1) },
              () => {
                setTimeout(hide, 1200);
              },
            );
          } else {
            hide();
          }
          translateStart.value = -1;
        },
      });

      return (
        <PanGestureHandler
          ref={panGestureRef}
          simultaneousHandlers={scrollGestureRef}
          onGestureEvent={onGestureEvent}
        >
          <Animated.View>
            <Animated.View style={[styles.refreshView, refreshViewStyle]}>
              <Text>刷新</Text>
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

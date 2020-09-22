import React, {useRef, memo, useMemo, useEffect} from 'react';
import {ViewStyle, Animated, LayoutChangeEvent, ScrollView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {View} from '../view/view';
import {ScrollingProps} from './scrolling.props';
import {styles} from './scrolling.styles';

export const Scrolling: React.FC<ScrollingProps> = memo((props) => {
  const {
    spacing = 0,
    activeIndex,
    onChange,
    style: styleOverride = {},
    items,
    renderItem,
    horizontal,
    scrollProps,
    ...other
  } = props;

  const store = useRef<{rootSize: number; sizes: number[]}>({
    rootSize: 0,
    sizes: [],
  });
  const scrollRef = useRef<ScrollView>();

  const onRootLayout = (e: LayoutChangeEvent) => {
    const {width, height} = e.nativeEvent.layout;
    store.current.rootSize = horizontal ? width : height;
  };

  const onItemLayout = (e: LayoutChangeEvent, index: number) => {
    const {width, height} = e.nativeEvent.layout;
    store.current.sizes[index] = horizontal ? width : height;
  };

  const onEachPress = useMemo(
    () => (index: number) => {
      const {rootSize = 0, sizes = []} = store.current;
      let offset = spacing * (index + 1);
      let targetOffset = 0;
      const halfRootSize = rootSize / 2;
      const currentSize = sizes[index] || 0;

      for (let i = 0; i < index; i++) {
        offset += sizes[i];
      }

      if (offset >= halfRootSize) {
        targetOffset = offset - halfRootSize + currentSize / 2;
      }

      if (scrollRef.current) {
        scrollRef.current.scrollTo({[horizontal ? 'x' : 'y']: targetOffset});
      }

      typeof onChange === 'function' && onChange(index);
    },
    [onChange],
  );

  useEffect(() => {
    onEachPress(activeIndex);
  }, [activeIndex]);

  return (
    <View
      style={[styles.root, styleOverride]}
      onLayout={onRootLayout}
      {...other}>
      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces
        {...scrollProps}
        ref={scrollRef}
        horizontal={horizontal}>
        {items.map((item, index) => {
          const itemSpacingStyle: ViewStyle = {
            [horizontal ? 'marginRight' : 'marginBottom']: spacing, // 两端均包含spacing
            [horizontal ? 'marginLeft' : 'marginTop']:
              index === 0 ? spacing : 0,
          };

          return (
            <RectButton
              key={index}
              onPress={() => onEachPress(index)}
              // @ts-ignore
              onLayout={(e) => onItemLayout(e, index)}
              style={itemSpacingStyle}>
              {renderItem(item, index === activeIndex)}
            </RectButton>
          );
        })}
      </Animated.ScrollView>
    </View>
  );
});

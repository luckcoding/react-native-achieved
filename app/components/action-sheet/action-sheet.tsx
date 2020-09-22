import React, {useState, useEffect} from 'react';
import {ActionSheetProps} from './action-sheet.props';
import {
  styles,
  ActionSheetItemHeight,
  ActionSheetCancelSpacing,
} from './action-sheet.styles';
import {ViewStyle, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useSafeArea} from 'react-native-safe-area-context';
import {useColorTheme} from '../../theme';
import {Text} from '../text/text';

export const ActionSheet: React.FC<ActionSheetProps> = (props) => {
  const {
    visibile = false,
    items = [],
    onIndex,
    destructiveIndex,
    onHide,
  } = props;

  const {colors} = useColorTheme();
  const {bottom: safeBottom} = useSafeArea();

  const offset =
    (items.length + 1) * ActionSheetItemHeight +
    ActionSheetCancelSpacing +
    safeBottom;
  const [translateY] = useState(new Animated.Value(0));
  const opacity = Animated.multiply(translateY, -1).interpolate({
    inputRange: [0, offset],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const showAnimation = () => {
    Animated.spring(translateY, {
      toValue: -offset,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };

  const hideAnimation = () => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 0,
    }).start(() => {
      typeof onHide === 'function' && onHide();
    });
  };

  const onIndexHandler = (index?: number) => {
    hideAnimation();
    typeof onIndex === 'function' && onIndex(index);
  };

  useEffect(() => {
    visibile ? showAnimation() : hideAnimation();
  }, [visibile]);

  const itemStyle: ViewStyle[] = [
    styles.item,
    {backgroundColor: colors.cardColor},
  ];
  const rootStyle: ViewStyle[] = [
    styles.root,
    {backgroundColor: colors.pageColor},
  ];
  return (
    <React.Fragment>
      <TouchableOpacity
        style={StyleSheet.absoluteFillObject}
        onPress={() => onIndexHandler()}
        activeOpacity={1}>
        <Animated.View style={[{opacity}, styles.mask]} />
      </TouchableOpacity>
      <Animated.View style={[rootStyle, {transform: [{translateY}]}]}>
        {items.map((item, index) => (
          <RectButton
            key={index}
            style={itemStyle}
            onPress={() => onIndexHandler(index)}>
            <Text h6 upperCase primaryColor={destructiveIndex === index}>
              {item}
            </Text>
          </RectButton>
        ))}
        <RectButton
          style={[itemStyle, styles.cancelItem]}
          onPress={() => onIndexHandler()}>
          <Text h6 upperCase>
            Cancel
          </Text>
        </RectButton>
      </Animated.View>
    </React.Fragment>
  );
};

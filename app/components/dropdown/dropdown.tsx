import React, {
  RefForwardingComponent,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
  memo,
  isValidElement,
  useCallback,
} from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  findNodeHandle,
  StyleSheet,
  LayoutChangeEvent,
} from 'react-native';
import { screenHeight } from '../../theme';
import { DropdownProps, DropdownHandles } from './dropdown.props';
import { styles } from './dropdown.styles';
import { measure } from '../../utils/helpers';

const DropdownCore: RefForwardingComponent<DropdownHandles, DropdownProps> = (
  props,
  ref,
) => {
  const {
    duration = 200,
    expan,
    expanHeight = 0,
    expanStyle,
    parent,
    children,
  } = props;

  const isStaticExpan = expanHeight > 0;

  const [isOpend, setIsOpend] = useState(false);
  const [expanRealHeight, setExpanRealHeight] = useState(expanHeight);
  const [translateY] = useState(new Animated.Value(-screenHeight));

  const opacity = translateY.interpolate({
    inputRange: [-expanRealHeight, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const siblingRef = useRef<View>();
  const expanRootRef = useRef<View>();
  const expanRef = useRef<View>();

  const getOffsetTop = async (): Promise<number> => {
    const { pageY, height } = await measure(findNodeHandle(siblingRef.current));
    let offsetTop = pageY + height;
    if (parent) {
      const { pageY: parentPageY } = await measure(
        findNodeHandle(parent.current),
      );
      offsetTop -= parentPageY;
    }
    return offsetTop;
  };

  const showAnimate = useCallback((expanRealHeight: number) => {
    translateY.setValue(-expanRealHeight);
    Animated.timing(translateY, {
      toValue: 0,
      useNativeDriver: true,
      duration,
    }).start();
  }, []);

  const show = async () => {
    try {
      const offsetTop = await getOffsetTop();
      expanRootRef.current.setNativeProps({
        top: offsetTop,
        height: screenHeight - offsetTop,
      });
      setIsOpend(true);
      isStaticExpan && showAnimate(expanRealHeight);
    } catch (e) {}
  };

  const hide = () => {
    Animated.timing(translateY, {
      toValue: -expanRealHeight,
      useNativeDriver: true,
      duration,
    }).start(() => {
      setIsOpend(false);
      expanRootRef.current.setNativeProps({ height: 0 });
    });
  };

  const toggle = () => {
    isOpend ? hide() : show();
  };

  // isStaticExpan
  const onExpanLayout = (e: LayoutChangeEvent) => {
    const expanRealHeight = e.nativeEvent.layout.height;
    if (expanRealHeight > 0) {
      setExpanRealHeight(expanRealHeight);
      showAnimate(expanRealHeight);
    }
  };

  useImperativeHandle(ref, () => ({ show, hide, toggle }));

  return (
    <React.Fragment>
      <View collapsable={false} ref={siblingRef}>
        {isValidElement(children)
          ? children
          : typeof children === 'function'
          ? children(isOpend)
          : null}
      </View>
      <View ref={expanRootRef} style={styles.expanRoot}>
        <TouchableOpacity
          style={StyleSheet.absoluteFillObject}
          onPress={hide}
          activeOpacity={1}
        >
          <Animated.View style={[{ opacity }, styles.mask]} />
        </TouchableOpacity>
        <Animated.View
          ref={expanRef}
          style={[expanStyle, { transform: [{ translateY }] }]}
          onLayout={isStaticExpan ? undefined : onExpanLayout}
        >
          {expan}
        </Animated.View>
      </View>
    </React.Fragment>
  );
};

export const Dropdown = memo(forwardRef(DropdownCore));

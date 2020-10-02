import React, { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { TooltipProps } from './tooltip.props';
import { styles } from './tooltip.styles';
import {
  Animated,
  findNodeHandle,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import { Triangle, TriangleRef } from './triangle';
import { measure, MeasuredResult } from '../../utils/helpers';
import { useLayoutedEffect } from '../../utils/hooks/useLayoutedEffect';
import { screenHeight, screenWidth } from '../../theme';
import { calculate } from './calculate';
import { useSafeState } from '../../utils/hooks';
import { IPlace, IPosition } from './constants';

export const Tooltip = memo<TooltipProps>((props) => {
  const {
    popover,
    position,
    place = 'center',
    showType,
    triangleWidth = 20,
    triangleHeight = 10,
    triangleColor = 'white',
    children,
  } = props;
  const anchorRef = useRef<View>();
  const popoverRef = useRef<View>();
  const triangleRef = useRef<TriangleRef>();

  const [visible, setVisible] = useSafeState(false);

  const calculatedInfo = useMemo(
    () => ({
      popoverSize: { height: 0, width: 0 },
      windowSize: { width: screenWidth, height: screenHeight },
      anchorLayout: {} as MeasuredResult,
    }),
    [],
  );

  const startLayout = useCallback(
    async (options?: { position: IPosition; place: IPlace }) => {
      calculatedInfo.anchorLayout = await measure(
        findNodeHandle(anchorRef.current),
      );
      const {
        majorPosition,
        majorPositionValue,
        minorPosition,
        minorPositionValue,
        isVertical,
      } = calculate({
        ...calculatedInfo,
        position: options ? options.position : position,
        place: options ? options.place : place,
      });

      popoverRef.current?.setNativeProps({
        [majorPosition]: majorPositionValue - triangleHeight,
        [minorPosition]: minorPositionValue,
        opacity: 1,
      });

      const { height, width } = calculatedInfo.popoverSize;
      const triangleMajorOffset =
        (isVertical ? height : width) - triangleHeight;

      let triangleMinorOffset = 0;
      if (place === 'center') {
        triangleMinorOffset =
          ((isVertical ? width : height) - triangleWidth) / 2;
      } else {
        triangleMinorOffset += triangleWidth / 2;
      }

      triangleRef.current?.draw(majorPosition, {
        [majorPosition]: majorPositionValue + triangleMajorOffset,
        [minorPosition]: minorPositionValue + triangleMinorOffset,
        opacity: 1,
      });
    },
    [position, place, triangleHeight, triangleWidth],
  );

  const onAnchorLayout = useLayoutedEffect(() => {
    if (showType === 'always') {
      setVisible(true);
    }
  }, [showType]);

  const show = useCallback(() => {
    !visible && setVisible(true);
  }, []);

  useEffect(() => {
    const measureLoop = async () => {
      console.log('loop', position, place);
      if (!popoverRef.current) {
        setTimeout(measureLoop, 50);
        return undefined;
      }
      const { height, width } = await measure(
        findNodeHandle(popoverRef.current),
      );
      if (!height || !width) {
        setTimeout(measureLoop, 50);
        return undefined;
      }
      calculatedInfo.popoverSize.height = height;
      calculatedInfo.popoverSize.width = width;
      startLayout();
    };
    visible && measureLoop();
  }, [visible]);

  const onRequestClose = useCallback(() => {
    visible && setVisible(false);
  }, [visible]);

  const renderContent = useMemo(
    () => () => {
      if (showType === 'always') {
        return children;
      } else {
        return (
          <TouchableOpacity
            onPress={showType === 'press' ? show : null}
            onLongPress={showType === 'longPress' ? show : null}
            activeOpacity={1}
          >
            {children}
          </TouchableOpacity>
        );
      }
    },
    [showType, children],
  );

  return (
    <View collapsable={false} onLayout={onAnchorLayout} ref={anchorRef}>
      {renderContent()}
      <Modal
        visible={visible}
        animationType="fade"
        transparent
        onRequestClose={onRequestClose}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={onRequestClose}
          style={{ flex: 1 }}
        >
          <Animated.View ref={popoverRef} style={styles.popover}>
            {popover}
          </Animated.View>
          <Triangle
            ref={triangleRef}
            width={triangleWidth}
            height={triangleHeight}
            color={triangleColor}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  );
});

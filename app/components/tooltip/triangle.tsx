import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { ViewProps, ViewStyle } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import { IPosition } from './constants';

interface TriangleProps extends ViewProps {
  width?: number;
  height?: number;
  color?: string;
}

export interface TriangleRef {
  draw: (position: IPosition, styles: ViewStyle) => void;
}

export const Triangle = forwardRef<TriangleRef, TriangleProps>(
  ({ width = 12, height = 6, color, style = {}, ...props }, ref) => {
    const [realSize, setRealSize] = useState({ height, width });
    const [points, setPoints] = useState('');
    const [styles, setStyles] = useState<ViewStyle>({});

    const getPoints = useCallback(
      (position) => {
        if (position === 'bottom') {
          return `0,${height} ${width / 2},0 ${width},${height}`;
        } else if (position === 'top') {
          return `0,0 ${width / 2},${height} ${width},0`;
        } else if (position === 'left') {
          return `0,0 ${height},${width / 2} 0,${width}`;
        } else {
          return `${height},0 0,${width / 2} ${height},${width}`;
        }
      },
      [height, width],
    );

    useImperativeHandle(ref, () => ({
      draw: (position, styles) => {
        if (position === 'left' || position === 'right') {
          setRealSize({ width: height, height: width });
        }
        setPoints(getPoints(position));
        setStyles(styles);
      },
    }));

    return (
      <Svg
        {...realSize}
        style={[{ position: 'absolute', zIndex: 1 }, styles, style]}
        {...props}
      >
        <Polygon points={points} fill={color} />
      </Svg>
    );
  },
);

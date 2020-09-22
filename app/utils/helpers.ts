import {StyleProp, StyleSheet, UIManager} from 'react-native';

export const objectCore = Object.prototype.toString;

export const isJsonObject = (input) =>
  objectCore.call(input).toLowerCase() === '[object object]';

export const QS = {
  stringify(input): URLSearchParams {
    const urlencoded = new URLSearchParams();
    if (isJsonObject(input)) {
      for (const key in input) {
        urlencoded.append(key, input[key]);
      }
    }
    return urlencoded;
  },
};

export const flattenStyle = <T extends {}>(style: StyleProp<T>): T => {
  if (Array.isArray(style)) {
    return StyleSheet.flatten(style) as T;
  } else {
    return style as T;
  }
};

export const measure = (
  node: number,
): Promise<{
  x: number;
  y: number;
  width: number;
  height: number;
  pageX: number;
  pageY: number;
}> =>
  new Promise((resolve) => {
    UIManager.measure(node, (x, y, width, height, pageX, pageY) => {
      resolve({x, y, width, height, pageX, pageY});
    });
  });

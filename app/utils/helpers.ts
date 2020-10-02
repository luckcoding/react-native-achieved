import { StyleProp, StyleSheet, UIManager } from 'react-native';

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

export interface MeasuredResult {
  x: number;
  y: number;
  width: number;
  height: number;
  pageX: number;
  pageY: number;
}

export const measure = (node: number): Promise<MeasuredResult> =>
  new Promise((resolve) => {
    UIManager.measure(node, (x, y, width, height, pageX, pageY) => {
      resolve({ x, y, width, height, pageX, pageY });
    });
  });

export const measureInWindow = (node: number) =>
  new Promise((resolve) => {
    UIManager.measureInWindow(
      node,
      (x: number, y: number, width: number, height: number) => {
        resolve({ x, y, width, height });
      },
    );
  });

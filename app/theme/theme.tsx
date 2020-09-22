import React, {memo, forwardRef} from 'react';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {Colors} from './color';
import {useColorTheme} from './color-theme';

type IStyles = {[key: string]: ViewStyle | TextStyle | ImageStyle};
type IStyled<P extends {}, C extends Colors, S extends IStyles> = (
  props: P,
  colors: C,
) => S;

export interface IThemeOptions {
  readonly forwardRef?: boolean;
}

export const theme = <
  P extends object,
  S extends IStyles,
  F extends IStyled<P, Colors, S>,
  TRef = {}
>(
  styled: F,
  baseComponent: React.RefForwardingComponent<
    TRef,
    P & {styles: ReturnType<F>}
  >,
  options?: IThemeOptions,
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P & {styles: ReturnType<F>}> & React.RefAttributes<TRef>
> => {
  const realOptions: IThemeOptions = {
    forwardRef: false,
    ...options,
  };

  const baseComponentName = baseComponent.displayName || baseComponent.name;
  const wrappedComponent = (
    props: P & {styles: ReturnType<F>},
    ref: React.Ref<TRef>,
  ) => {
    const styles = styled(props, useColorTheme().colors);
    return baseComponent({...props, styles} as any, ref);
  };
  wrappedComponent.displayName = baseComponentName;

  const memoComponent = realOptions.forwardRef
    ? memo(forwardRef(wrappedComponent))
    : memo(wrappedComponent);

  copyStaticProperties(baseComponent, memoComponent);
  memoComponent.displayName = baseComponentName;

  return memoComponent;
};

const hoistBlackList: any = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true,
};

function copyStaticProperties(base: any, target: any) {
  Object.keys(base).forEach((key) => {
    if (!hoistBlackList[key]) {
      Object.defineProperty(
        target,
        key,
        Object.getOwnPropertyDescriptor(base, key)!,
      );
    }
  });
}

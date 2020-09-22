import React, {memo, useState, useMemo} from 'react';
import FastImage from 'react-native-fast-image';
import {Image as RNImage} from 'react-native';
import {ImageProps} from './image.props';

const placeholderDefault = require('../../assets/pic.png');

export const Image = memo((props: ImageProps) => {
  const {
    style,
    onError,
    placeholder = placeholderDefault,
    source,
    ...others
  } = props;

  const [fail, setFail] = useState(false);

  const _onError = useMemo(
    () => () => {
      setFail(true);
      typeof onError === 'function' && onError();
    },
    [],
  );

  if (
    !fail &&
    typeof source === 'object' &&
    /^(http(s?):\/\/|file:\/\/)/.test(source.uri)
  ) {
    return (
      <FastImage
        source={source}
        style={style as any}
        onError={_onError}
        {...others}
      />
    );
  } else {
    const missingUri = typeof source === 'object' && !source.uri;
    return (
      <RNImage
        style={style}
        source={fail || !source || missingUri ? (placeholder as any) : source}
        onError={_onError}
        {...(others as any[])}
      />
    );
  }
});

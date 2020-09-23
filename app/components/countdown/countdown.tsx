import React, { useEffect, useRef } from 'react';
import { CountdownProps } from './countdown.props';
import { styled } from './countdown.styles';
import { useCountDown } from '../../utils/hooks';
import { load } from '../../utils/storage';
import { Text } from '../text/text';
import { Touchable } from '../touchable/touchable';

const named = (name = '') => `@@countdown_${name}`;

export const Countdown: React.FC<CountdownProps> = (props) => {
  const styles = styled(props);
  const { duration = 30, name, text, nextText, disabled = false } = props;

  const nextRef = useRef<boolean>(false);

  const onBeforeChange = (nextCount: number) => {
    if (nextCount === 0) {
      nextRef.current = true;
    }
    return nextCount;
  };

  const { count, start } = useCountDown({ duration, onBeforeChange });

  const isDisabled = disabled || !!count;

  const setTimeLeft = async (): Promise<void> => {
    if (!name) return;

    const lastTime = await load(named(name));
    if (!lastTime) return;

    const timeLeft = Math.floor(duration - (Date.now() - lastTime) / 1000);
    if (timeLeft > 0) {
      start(timeLeft);
    }
  };

  useEffect(() => {
    setTimeLeft();
  }, [name]);

  const renderText = () => {
    if (nextRef.current) {
      return nextText;
    } else {
      return count ? `${count}秒` : text;
    }
  };

  const onStart = () => {
    nextRef.current = false;
    start();
  };

  return (
    <Touchable style={styles.root} onPress={onStart} disabled={isDisabled}>
      <Text small placeholderColor={isDisabled} primaryColor={!isDisabled}>
        {renderText()}
      </Text>
    </Touchable>
  );
};

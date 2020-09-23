import React, { useEffect, useState, memo } from 'react';
import { Animated } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import { styles } from './message.styles';
import { View } from '../view/view';
import IconWarningFill from '../icon/IconWarningFill';
import IconSuccessFill from '../icon/IconSuccessFill';
import IconAccessory from '../icon/IconAccessory';
import IconActivityFill from '../icon/IconActivityFill';
import { Text } from '../text/text';
import { IMessage } from './message.context';
import { useColorTheme } from '../../theme';

type MessageProps = IMessage & {
  duration?: number;
  onHide?: () => void;
  offsetTop?: number;
};

export const Message: React.FC<MessageProps> = memo((props) => {
  const { type, title, text, duration = 3000, offsetTop = 0, onHide } = props;

  const [translateY] = useState(new Animated.Value(0));

  const { top: safeTop } = useSafeArea();
  const { colors } = useColorTheme();

  const showAnimation = () => {
    Animated.spring(translateY, {
      toValue: safeTop + offsetTop,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };

  const hideAnimation = () => {
    Animated.spring(translateY, {
      toValue: -100,
      useNativeDriver: true,
      bounciness: 0,
    }).start(() => {
      typeof onHide === 'function' && onHide();
    });
  };

  useEffect(() => {
    showAnimation();
    const timer = setTimeout(hideAnimation, duration);
    return () => {
      clearTimeout(timer);
    };
  }, [text, type]);

  return (
    <Animated.View
      style={[
        styles.root,
        { backgroundColor: colors.cardColor, transform: [{ translateY }] },
      ]}
    >
      {type === 'info' && <IconActivityFill style={styles.icon} />}
      {type === 'error' && <IconAccessory style={styles.icon} />}
      {type === 'success' && <IconSuccessFill style={styles.icon} />}
      {type === 'warning' && <IconWarningFill style={styles.icon} />}
      {title || text ? (
        <View style={styles.main}>
          {title ? <Text h6>{title}</Text> : null}
          {text ? <Text>{text}</Text> : null}
        </View>
      ) : null}
    </Animated.View>
  );
});

import React, { memo } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { createStyled, spacing } from '../../theme';
import { Text } from '../text/text';
import { View } from '../view/view';

interface RadioProps extends TouchableOpacityProps {
  selectedIndex?: number;
}

const styled = createStyled((props, colors) => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: spacing[2],
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.cardColor,
    backgroundColor: 'rgba(0,0,0,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeItem: {
    borderColor: colors.complementaryColor,
    backgroundColor: colors.complementaryColor,
  },
}));

export const Radio: React.FC<RadioProps> = memo((props) => {
  const { selectedIndex, ...other } = props;
  const styles = styled(props);
  const isSelected = selectedIndex !== -1;
  return (
    <TouchableOpacity style={styles.root} {...other}>
      <View style={[styles.item, isSelected ? styles.activeItem : undefined]}>
        {isSelected ? (
          <Text small cardColor>
            {selectedIndex + 1}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
});

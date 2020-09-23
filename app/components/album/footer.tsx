import React from 'react';
import { View } from '../view/view';
import { styles } from './album.styles';
import { ActivityIndicator } from 'react-native';
import { Text } from '../text/text';

export class Footer extends React.PureComponent {
  state = {
    loading: false,
    next: true,
    empty: false,
  };

  setStates = (options: {
    loading?: boolean;
    next?: boolean;
    empty?: boolean;
  }) => {
    this.setState(options);
  };

  render() {
    const { loading, next, empty } = this.state;
    return (
      <View style={styles.footer}>
        {!loading && empty ? <Text>Empty</Text> : null}
        {loading ? (
          <ActivityIndicator color="red" />
        ) : !next && !empty ? (
          <Text>The End</Text>
        ) : null}
      </View>
    );
  }
}

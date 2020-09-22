import * as React from 'react';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen} from '../../../storybook/views';
import {StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {Text} from '../text/text';
import {View} from '../view/view';
import {useMessage} from './message.provider';
import {Sibling, SiblingHandles} from '../sibling/sibling';

declare let module;

const styles = StyleSheet.create({
  root: {
    marginTop: 100,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
  },
});

storiesOf('Message', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('core', () =>
    React.createElement(() => {
      const [visible, setVisible] = React.useState(false);
      const {show, error, success, warning} = useMessage();
      const messageSiblingRef = React.useRef<SiblingHandles>();
      const onPress = () => {
        warning({text: 'warning text'}, messageSiblingRef);
      };
      return (
        <React.Fragment>
          <View style={styles.root}>
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                show({type: 'info', title: 'info title', text: 'info text'})
              }>
              <Text>show info</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => error({title: 'error title', text: 'error text'})}>
              <Text>show error</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => success({title: 'success title'})}>
              <Text>show success</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => warning({text: 'warning text'})}>
              <Text>show warning</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => setVisible(true)}>
              <Text>Show Modal</Text>
            </TouchableOpacity>
          </View>
          <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={() => setVisible(false)}>
            <View style={styles.root}>
              <TouchableOpacity style={styles.item} onPress={onPress}>
                <Text>show</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.item}
              onPress={() => setVisible(false)}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
            <Sibling ref={messageSiblingRef} />
          </Modal>
        </React.Fragment>
      );
    }),
  );

import React, { useCallback, useEffect, useState } from 'react';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Screen, ScrollView, Text } from '../../components';
import { windowWidth } from '../../theme';
import { delay } from '../../utils/delay';
import { styles } from './scroll-view-screen.styles';

export interface ScrollViewScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

const initialLayout = { width: windowWidth };

const FirstRoute = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      await delay(Math.ceil(Math.random() * 10) * 1000);
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  useEffect(() => {
    onRefresh();
  }, []);

  return (
    <ScrollView
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      RefreshComponent={() => <Text>刷新</Text>}
    >
      {Array(1000)
        .fill({})
        .map((i, index) => (
          <Text key={index}>{index}</Text>
        ))}
    </ScrollView>
  );
};

const SecondRoute = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    if (!isRefreshing) {
      setIsRefreshing(true);
      await delay(Math.ceil(Math.random() * 10));
      setIsRefreshing(false);
    }
  }, [isRefreshing]);

  return (
    <ScrollView
      isRefreshing={isRefreshing}
      onRefresh={onRefresh}
      RefreshComponent={() => <Text>刷新</Text>}
    ></ScrollView>
  );
};

export const ScrollViewScreen: React.FC<ScrollViewScreenProps> = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <Screen>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </Screen>
  );
};

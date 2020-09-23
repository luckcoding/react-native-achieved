import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  HomeScreen,
  DetailScreen,
  CategoryScreen,
  CartScreen,
  LoginScreen,
  ProfileScreen,
} from '../screens';
import {
  AuthParamList,
  HomeParamList,
  ProfileParamList,
  TabParamList,
  DrawerParamList,
  RootParamList,
} from './types';

/**
 * auth
 */
const AuthStack = createStackNavigator<AuthParamList>();
const AuthNavigator = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

/**
 * Home
 */
const HomeStack = createStackNavigator<HomeParamList>();
const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Detail" component={DetailScreen} />
  </HomeStack.Navigator>
);

/**
 * Profile
 */
const ProfileStack = createStackNavigator<ProfileParamList>();
const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      options={{ header: () => null }}
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>
);

/**
 * Tab
 */
const TabStack = createBottomTabNavigator<TabParamList>();
const TabNavigator = () => (
  <TabStack.Navigator>
    <TabStack.Screen name="Home" component={HomeNavigator} />
    <TabStack.Screen name="Category" component={CategoryScreen} />
    <TabStack.Screen name="Cart" component={CartScreen} />
    <TabStack.Screen name="Profile" component={ProfileNavigator} />
  </TabStack.Navigator>
);

/**
 * Drawer
 */
const DrawerStack = createDrawerNavigator<DrawerParamList>();
const DrawerNavigator = () => (
  <DrawerStack.Navigator>
    <DrawerStack.Screen name="Home" component={TabNavigator} />
    <DrawerStack.Screen name="Profile" component={HomeScreen} />
  </DrawerStack.Navigator>
);

/**
 * Root
 */
const RootStack = createStackNavigator<RootParamList>();
const RootNavigator = ({ loggedIn }: { loggedIn: boolean }) => (
  <RootStack.Navigator headerMode="none">
    {loggedIn ? (
      <RootStack.Screen name="App" component={DrawerNavigator} />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export const Navigator = React.forwardRef<
  NavigationContainerRef,
  Partial<
    React.ComponentProps<typeof NavigationContainer> & { loggedIn?: boolean }
  >
>(({ loggedIn, ...props }, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootNavigator loggedIn={loggedIn} />
    </NavigationContainer>
  );
});

Navigator.displayName = 'RootNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['welcome'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);

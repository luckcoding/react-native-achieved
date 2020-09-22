export type AuthParamList = {
  Login: undefined;
  PhoneLogin: undefined;
  Register: undefined;
};

export type HomeParamList = {
  Home: undefined;
  Detail: undefined;
};

export type ProfileParamList = {
  Profile: undefined;
};

export type TabParamList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
};

export type RootParamList = {
  App: undefined;
  Auth: undefined;
};

export type StackParamList = AuthParamList &
  HomeParamList &
  ProfileParamList &
  TabParamList &
  DrawerParamList &
  RootParamList;

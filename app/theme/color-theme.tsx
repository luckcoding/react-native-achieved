import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import {Appearance, ColorSchemeName} from 'react-native';
import {useSubscription} from 'use-subscription';
import {EventEmitter} from 'fbemitter';
import {
  lightColors,
  darkColors,
  NavigationDarkTheme,
  NavigationLightTheme,
  Colors,
} from './color';
import {Theme} from '@react-navigation/native';

const eventEmitter = new EventEmitter();

const AppearancePreferencesStore: Appearance.AppearancePreferences = {
  colorScheme: Appearance.getColorScheme(),
};

type ColorThemeStates = {
  dark: boolean;
  colors: Colors;
  setColorScheme: (colorScheme: ColorSchemeName) => void; // for: if app not follow system color theme!!
};

export const ColorThemeContext = createContext<ColorThemeStates>(
  {} as ColorThemeStates,
);

export const useColorTheme = () => useContext(ColorThemeContext);

export function useColorScheme(): ColorSchemeName {
  const subscription = useMemo(
    () => ({
      getCurrentValue: () => AppearancePreferencesStore.colorScheme,
      subscribe: (callback: Appearance.AppearanceListener) => {
        const eventSubscription = eventEmitter.addListener(
          'colorScheme',
          callback,
        );
        return () => eventSubscription.remove();
      },
    }),
    [],
  );
  return useSubscription<ColorSchemeName>(subscription);
}

export function useNavigationTheme(): Theme {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? NavigationDarkTheme : NavigationLightTheme;
}

type ColorThemeProvider = {
  children: any;
  colorScheme?: ColorSchemeName;
};

export const ColorThemeProvider: React.FC<ColorThemeProvider> = (props) => {
  const {children, colorScheme: colorSchemeOverride} = props;

  // set init in to store
  AppearancePreferencesStore.colorScheme =
    colorSchemeOverride || Appearance.getColorScheme();

  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(
    AppearancePreferencesStore.colorScheme,
  );

  const isDark = colorScheme === 'dark';

  // listener change and handle event
  const setAppearance: Appearance.AppearanceListener = (preferences) => {
    if (preferences.colorScheme !== colorScheme) {
      AppearancePreferencesStore.colorScheme = preferences.colorScheme;
      eventEmitter.emit('colorScheme', preferences.colorScheme);
      setColorScheme(preferences.colorScheme);
    }
  };

  useEffect(() => {
    !colorSchemeOverride && Appearance.addChangeListener(setAppearance);
    return () => {
      !colorSchemeOverride && Appearance.removeChangeListener(setAppearance);
    };
  }, []);

  // states for child
  const states: ColorThemeStates = {
    dark: isDark,
    colors: isDark ? darkColors : lightColors,
    setColorScheme: (colorScheme: ColorSchemeName) => {
      setAppearance({colorScheme});
    },
  };

  return (
    <ColorThemeContext.Provider value={states}>
      {children}
    </ColorThemeContext.Provider>
  );
};

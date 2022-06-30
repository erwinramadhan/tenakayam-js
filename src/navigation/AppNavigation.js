import React, {useRef} from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import GetContext from '../context/Context';
import Tabs from './Screens';
import {StyleSheet} from 'react-native';

const Context = GetContext();

const navigationRef = React.createRef();

const AppNavigation = () => {
  const routeNameRef = useRef();
  const isReadyRef = useRef(false);
  const {theme} = Context.UseData();

  const navigationTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: 'rgba(0,0,0,0)',
      text: String(theme.colors.text),
    },
  };

  const onReady = () => {
    isReadyRef.current = true;
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  };

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      style={Style.safeAreaProvider}>
      <NavigationContainer
        ref={navigationRef}
        onReady={onReady}
        theme={navigationTheme}>
        <Tabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigation;

const Style = StyleSheet.create({
  safeAreaProvider: {
    flex: 1,
  },
});

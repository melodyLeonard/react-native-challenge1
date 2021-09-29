import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import DashboardNavigation from './DashboardStackNavigator';

type AppNavigatorProps = {
  auth: undefined;
  app: undefined;
};

const Stack = createNativeStackNavigator<AppNavigatorProps>();

export type AppProps = NativeStackScreenProps<AppNavigatorProps, 'app'>;

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="app" component={DashboardNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

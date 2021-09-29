import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './BottomNavigation';

type DashboardParamsList = {
  product: undefined;
  dashboard: undefined;
  orders: undefined;
  chat: undefined;
};

export type ProductsProps = NativeStackScreenProps<
  DashboardParamsList,
  'product'
>;
export type HomeProps = NativeStackScreenProps<
  DashboardParamsList,
  'dashboard'
>;

const Stack = createNativeStackNavigator<DashboardParamsList>();
const DashboardNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="dashboard" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default DashboardNavigation;

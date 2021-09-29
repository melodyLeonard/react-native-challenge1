import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import global from '../global';
import useTheme from '../hooks/useTheme';
import HomeScreen from '../screens/Home';
import {bottomTabBarMapper} from './constant';

type BottomStackParamList = {
  profile: undefined;
  home: undefined;
  settings: undefined;
};

export type AccountsProps = NativeStackScreenProps<
  BottomStackParamList,
  'profile'
>;

const BottonTab = createBottomTabNavigator<BottomStackParamList>();

const BottonTabStack: FC = () => {
  const {colors, height, gutter} = useTheme();
  return (
    <BottonTab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          const iconName = bottomTabBarMapper[route.name];
          return (
            <Ionicons
              name={iconName}
              size={26}
              color={focused ? colors.white : colors.text}
              style={focused && styles.home}
            />
          );
        },
        tabBarStyle: {
          height: height.Header,
          borderTopWidth: 0,
          borderTopColor: colors.white,
          shadowColor: colors.white,
          shadowOffset: 0,
          backgroundColor: colors._3,
          fontWeight: 'bold',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarShowLabel: false,
      })}>
      <BottonTab.Screen name="profile" component={HomeScreen} />
      <BottonTab.Screen name="home" component={HomeScreen} />
      <BottonTab.Screen name="settings" component={HomeScreen} />
    </BottonTab.Navigator>
  );
};

export default BottonTabStack;

const styles = StyleSheet.create({
  home: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: global.colors.primary,
    width: global.height.Header - 15,
    height: global.height.Header - 15,
    padding: 10,
    borderRadius: 5,
    shadowColor: global.colors.primary,
    fontWeight: 'bold',
    elevation: 5,
    shadowOpacity: 0.27,
    shadowRadius: 10,
    shadowOffset: {width: 1, height: 3},
  },
});

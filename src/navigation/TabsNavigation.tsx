import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyColor} from '../theme/AppTheme';
import {HomeListStackNavigator} from './HomeStackNavigation';
import {View} from 'react-native';
import {Icon} from '@rneui/themed';
export type TabsParamsList = {
  HomeListStackNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabsParamsList>();

export const TabsNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        elevation: 0,
        borderTopColor: MyColor.home,
        backgroundColor: MyColor.home,
      },
    }}>
    <Tab.Screen
      name="HomeListStackNavigator"
      component={HomeListStackNavigator}
      options={{
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarActiveTintColor: MyColor.black,
        tabBarIcon: ({focused}) => (
          <Icon
            name="home"
            color={focused ? MyColor.black : ''}
            size={30}
            type="ionicon"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

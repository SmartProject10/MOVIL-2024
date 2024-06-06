import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../view/Home/Home';
import {EppsAddScreen} from '../view/Iso45001/Epps/EppsAdd';
import {FichaScreen} from '../view/Ficha/Ficha';
import { JobsListScreen } from '../view/Jobs/Jobs';

export type HomeStackParamList = {
  FichaScreen: undefined;
  HomeScreen: undefined;
  EppsAddScreen: undefined;
  JobsListScreen:undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeListStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FichaScreen" component={FichaScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="EppsAddScreen" component={EppsAddScreen} />
      <Stack.Screen name="JobsListScreen" component={JobsListScreen} />
    </Stack.Navigator>
  );
};

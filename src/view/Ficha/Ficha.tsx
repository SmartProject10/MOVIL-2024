import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigation';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import DI from '../../di/ioc';
import ListJobs from '../../components/Ficha/ListJobs';

interface Props extends StackScreenProps<HomeStackParamList, 'FichaScreen'> {}
export const FichaScreen = ({navigation}: Props) => {
  const {} = DI.resolve('FichaViewModel');
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.contentInit}>
        <Text style={styles.textInit}>Bienvenido Ricardo</Text>
      </View>

      <View style={styles.container}>
        <ListJobs />
      </View>
    </SafeAreaView>
  );
};

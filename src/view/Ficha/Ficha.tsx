import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigation';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import DI from '../../di/ioc';
import ListJobs from '../../components/Ficha/ListJobs';
import {Icon} from '@rneui/base';
import {MyColor} from '../../theme/AppTheme';

interface Props extends StackScreenProps<HomeStackParamList, 'FichaScreen'> {}
export const FichaScreen = ({navigation}: Props) => {
  const {} = DI.resolve('FichaViewModel');
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.contentInit}>
        <Text style={styles.textInit}>Bienvenido Ricardo</Text>
      </View>

      <View style={styles.alert}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{justifyContent: 'center'}}>
            <View style={{justifyContent: 'center'}}>
              <Icon
                name="alert-circle-outline"
                color={MyColor.black}
                size={50}
                type="ionicon"
              />
            </View>
            <Text style={styles.textAlert}>
            Tienes 5 solicitudes de empresas esperándote
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Text
                style={[
                  styles.textAlert,
                  {textDecorationLine: 'underline', marginBottom: 5},
                ]}>
                Ver mas
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <ListJobs />
      </View>
    </SafeAreaView>
  );
};

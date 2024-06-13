import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigation';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Styles';
import {Icon} from '@rneui/themed';
import {MyColor} from '../../theme/AppTheme';
import Iso45001 from '../../components/Home/Iso45001';

interface Props extends StackScreenProps<HomeStackParamList, 'HomeScreen'> {}
export const HomeScreen = ({navigation}: Props) => {
  const isoStandards = [
    {name: 'ISO 45001', icon: 'lock'},
    // {name: 'ISO 9001', icon: 'certificate'},
    {name: 'ISO 14001', icon: 'leaf'},
    // {name: 'ISO 27001', icon: 'shield'},
    // Agrega más ISOs y sus iconos correspondientes según sea necesario
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={MyColor.home} />
      <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Icon
            name="lock"
            size={19}
            type="feather"
            color={MyColor.primaryBlue}
            style={{marginLeft: 10, marginTop: 5, marginRight:10}}
          />
          <Text style={styles.textIsoLabel}>ISO 45001</Text>
        </View>
        {/* <ScrollView contentContainerStyle={styles.header} horizontal={true}>
          {isoStandards.map((iso, index) => (
            <TouchableOpacity key={`${index}-T`}>
              <View key={index} style={styles.box}>
                <Icon
                  name={iso.icon}
                  size={20}
                  type="font-awesome"
                  color={MyColor.black}
                  style={styles.icon}
                />
                <Text style={styles.isoText}>{iso.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView> */}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 15,
          marginVertical: 10,
          marginHorizontal: 8,
          backgroundColor: '#f8f9fa',
        }}>
        <Iso45001 />
      </View>
    </SafeAreaView>
  );
};

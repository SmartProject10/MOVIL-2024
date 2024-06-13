import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigation';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './Styles';
import {Icon} from '@rneui/base';
import {MyColor} from '../../../../theme/AppTheme';

interface Props
  extends StackScreenProps<HomeStackParamList, 'ListInspectScreen'> {}

export const ListInspectScreen = ({navigation}: Props) => {
  const data = [
    {
      label: `Extintores`,
      icon: 'flame-sharp',
    },
    {
      label: 'kit Antiderrame',
      icon: 'alert-circle-sharp',
    },
    {
      label: `Luces de emergencia`,
      icon: 'flash-sharp',
    },
    {
      label: 'Botiquin',
      icon: 'medkit',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate('FichaUserScreen')}>
      <View style={styles.contentCard}>
        <View style={styles.ro}>
          <View style={styles.ro}>
            <Icon
              name={item.icon}
              size={30}
              color={MyColor.primaryBlue}
              type="ionicon"
            />
            <Text style={styles.labelCard}>{item.label}</Text>
          </View>
          <View>
            <Icon
              name="chevron-forward-outline"
              size={30}
              color={MyColor.primaryBlue}
              type="ionicon"
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.content}>
      <View style={styles.contentTitle}>
        <Icon
          name="list"
          size={25}
          color={MyColor.primaryBlue}
          type="ionicon"
        />
        <Text style={styles.title}>Listado de inspecciones SST</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          
        />
      </View>
    </View>
  );
};

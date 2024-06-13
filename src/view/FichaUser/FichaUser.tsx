import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigation';
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import styles from './Styles';
import {Avatar, Button, Icon, Image} from '@rneui/base';
import {MyColor} from '../../theme/AppTheme';

interface Props
  extends StackScreenProps<HomeStackParamList, 'FichaUserScreen'> {}
export const FichaUserScreen = () => {
  const BASE_URI = 'https://picsum.photos/200/300?random=12';
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: 'https://picsum.photos/200/300?random=13'}}
          style={styles.background}>
          <View style={styles.header}>
            <Image source={{uri: BASE_URI + 55}} style={styles.profileImage} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.contentDescription}>
        <Text style={styles.name}>
          <Icon
            name="user"
            size={19}
            type="feather"
            color={MyColor.primaryBlue}
            style={{marginLeft: 10, marginTop: 10}}
          />{' '}
          Ricardo Leonel Garcia hernandez
        </Text>
        <Text style={styles.occupation}>
          <Icon
            name="briefcase"
            size={19}
            type="feather"
            color={MyColor.primaryBlue}
            style={{marginLeft: 10, marginTop: 10}}
          />{' '}
          La mejorada
        </Text>
        <Text style={styles.name}>
          <Icon
            name="shield"
            size={19}
            type="feather"
            color={MyColor.primaryBlue}
            style={{marginLeft: 10, marginTop: 10}}
          />{' '}
          Supervisor
        </Text>
      </View>
      <View style={styles.contentAltB}>
        <Text style={styles.labeltareas}>Tareas pendientes</Text>
      </View>
      <View style={[styles.contentAltB, {marginVertical: 10}]}>
        <Text style={styles.labeltareas}>Solicitudes pendientes</Text>
      </View>
      <View
        style={[
          styles.contentAlt,
          {
            backgroundColor: MyColor.home,
            alignItems: 'flex-start',
            borderRadius: 10,
          },
        ]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            borderRadius: 20,
            marginHorizontal: 5,
          }}>
          <Text style={styles.labelAnuncios}>Publicaciones</Text>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.horizontalScrollView}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: BASE_URI + '1'}}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: BASE_URI + '12'}}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: BASE_URI + '15'}}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigation';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import styles from './Styles';
import {Avatar, Icon, Image} from '@rneui/base';
import {MyColor} from '../../theme/AppTheme';

interface Props
  extends StackScreenProps<HomeStackParamList, 'FichaUserScreen'> {}
export const FichaUserScreen = () => {
  const BASE_URI = 'https://source.unsplash.com/random?sig=1';
  return (
    <View style={styles.content}>
      <ScrollView>
        <View style={styles.contentAlt}>
          <View style={styles.vieAvatar}>
            <Avatar
              size={100}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            />
          </View>
          <Text style={styles.textLabelAvat}>Ricardo Garcia</Text>
          <Text style={styles.textLabelAvat}>leogh58@gmail.com</Text>
          <Text style={styles.textLabelAvat}>Ingeniero Informatico programador del mas grande de os mas grandes de la empresas</Text>
          <Text style={styles.textLabelAvat}>Empresa la fantastica</Text>
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
            {backgroundColor: MyColor.home, alignItems: 'flex-start', borderRadius:10},
          ]}>
          <View style={{flex:1, flexDirection:'row'}}>
            <Icon
              name="megaphone-outline"
              size={35}
              type="ionicon"
              color={MyColor.black}
              style={{marginLeft: 10, marginTop:10}}
            />
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
    </View>
  );
};

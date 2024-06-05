import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Icon, Image} from '@rneui/themed';
import {MyColor} from '../../theme/AppTheme';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

export default function ListJobs() {
  const navigation = useNavigation();
  const BASE_URI = 'https://source.unsplash.com/random?sig=1';
  const data = [
    {
      label: `Corporación Favorita`,
      N: 1,
    },
    {
      label: 'Corporacion El Rosado',
      N: 2,
    },
    {
      label: `Corporación Favorita`,
      N: 3,
    },
    {
      label: 'Corporacion El Rosado',
      N: 4,
    },
    {
      label: `Corporación Favorita`,
      N: 5,
    },
    {
      label: 'Corporacion El Rosado',
      N: 6,
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('HomeScreen')}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: BASE_URI + item.N}}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
      <Text style={styles.textLabel}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <View style={[styles.contentInit, {marginTop: 5}]}>
        <Text style={styles.labelJobs}>Tus empresas asociadas</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
}

const {width} = Dimensions.get('window');
const buttonSize = (width - 55) / 2;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginHorizontal: 10,
    
    backgroundColor: MyColor.home,
  },
  contentInit: {
    marginLeft: 10,
  },
  textInit: {
    fontSize: RFValue(25, 500),
    color: MyColor.black,
    fontWeight: 'bold',
  },
  labelJobs: {
    fontSize: RFValue(12, 500),
    fontWeight: 'bold',
    color: MyColor.black,
  },
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: buttonSize,
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  textLabel: {
    textAlign: 'center',
    marginTop: 3,
    color: MyColor.black,
    fontWeight:'700',
    fontSize: RFValue(10, 500),
  },
});

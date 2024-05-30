import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon} from '@rneui/themed';
import {MyColor} from '../../theme/AppTheme';
import {RFValue} from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

export default function Iso45001() {
  const navigation = useNavigation();

  const data = [
    {
      iconName: 'headset',
      prop: 'ionicon',
      label: `Entrega de EPP's`,
      color: '#00c6aa',
      size: 40,
    },
    {
      iconName: 'document',
      prop: 'ionicon',
      label: 'Introduccion, reunion y capacitación',
      color: '#828282',
      size: 40,
    },
    {
      iconName: 'cloud-offline',
      prop: 'ionicon',
      label: 'Registros sin conexion ',
      color: '#2a2011',
      size: 40,
    },
    {
      iconName: 'clipboard-outline',
      prop: 'ionicon',
      label: 'Entrega de ATS, PETAR y otros',
      color: '#1e91ed',
      size: 40,
    },
    {
      iconName: 'list',
      prop: 'ionicon',
      label: 'Inspecciones SST',
      color: '#FAB336',
      size: 40,
    },

    // Agrega más datos según sea necesario
  ];
  // Renderizar cada elemento de la lista como un botón con un icono
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EppsAddScreen')}>
      <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
        <View style={{height:'50%', justifyContent:'flex-end'}}>
          <Icon
            name={item.iconName}
            size={item.size}
            color={item.color}
            type={item.prop}
          />
        </View>
        <View style={{height:'50%'}}>
          <Text style={styles.textLabel}>{item.label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Puedes cambiar esto a la cantidad de columnas deseada
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}
const {width} = Dimensions.get('window');
const buttonSize = (width - 55) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4}, // Ajustado para sombra más desvanecida
    shadowOpacity: 0.5, // Más desvanecida
    shadowRadius: 1, // Radio mayor para un desenfoque más suave
    // Propiedad para la sombra en Android
    elevation: 4,
    backgroundColor: MyColor.home, // Color de fondo de la pantalla
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: buttonSize,
    height: buttonSize,
    backgroundColor: MyColor.grayTem, // Color de fondo del botón
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Borde redondeado
    margin: 5, // Margen entre los botones
  },
  textLabel: {
    textAlign: 'center',
    marginTop: 3,
    color: MyColor.black,
    fontSize: RFValue(10, 500),
  },
});

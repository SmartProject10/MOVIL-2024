import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MyColor} from '../../theme/AppTheme';

const HomeStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: MyColor.home,
    borderRadius: 10,
    marginHorizontal: 8,
    marginVertical: 5,
    paddingHorizontal: 5,
    // Propiedades para la sombra en iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4}, // Ajustado para sombra más desvanecida
    shadowOpacity: 0.5, // Más desvanecida
    shadowRadius: 1, // Radio mayor para un desenfoque más suave
    // Propiedad para la sombra en Android
    elevation: 15,
  },
  header: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  isoContainer: {
    backgroundColor: '#007bff',
    padding: 20,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    width: '90%', // Ajuste de ancho para evitar desbordamiento horizontal
    alignSelf: 'center', // Centrar los contenedores horizontalmente
  },
  icon: {
    marginRight: 10,
  },
  isoText: {
    color: MyColor.black,
    fontSize: RFValue(10, 500),
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: MyColor.primaryTem,
    // backgroundColor: '#ECEFF1',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    width: 120,
  },
  textIsoLabel: {
    fontSize: RFValue(10,500),
    color:MyColor.black,
    textAlign:'center',
    fontWeight:'bold'
  }
});

export default HomeStyles;

import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MyColor} from '../../../theme/AppTheme';

const EppsStyles = StyleSheet.create({
  titleScreen: {
    fontSize: RFValue(20, 500),
    textAlign: 'center',
    color: MyColor.black,
    fontWeight: 'bold',
  },
  container: {
    flex: 2,
    backgroundColor: MyColor.home,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4}, // Ajustado para sombra más desvanecida
    shadowOpacity: 0.5, // Más desvanecida
    shadowRadius: 1, // Radio mayor para un desenfoque más suave
    // Propiedad para la sombra en Android
    elevation: 15,
  },
  container2: {
    flex: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  textEps: {
    color: MyColor.black,
    fontSize: RFValue(12, 500),
  },
  contentContainer: {
    padding: 10,
  },

  pickerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: MyColor.primary,
  },
  placeholder: {
    color: '#888', // Color gris para simular el placeholder
  },
  padPicker: {
    marginBottom: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',

    borderRadius: 5,
    overflow: 'hidden',
  },

  btnContinue: {
    backgroundColor: MyColor.primary,
    marginHorizontal: 2,
    marginTop: 30,
    padding: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnCan: {
    backgroundColor: MyColor.home,
    marginHorizontal: 2,
    marginTop: 30,
    padding: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: RFValue(12, 580),
    marginHorizontal: 20,
    color: MyColor.home,
  },
  textCanBtn: {
    fontWeight: 'bold',
    fontSize: RFValue(12, 580),
    marginHorizontal: 20,
    color: MyColor.black,
  },
});

export default EppsStyles;

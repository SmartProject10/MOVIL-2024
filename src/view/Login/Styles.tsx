import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MyColor} from '../../theme/AppTheme';

const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '36%',
    backgroundColor: MyColor.black,
  },

  imageContainer: {
    zIndex: 1,
    alignItems: 'center',
    marginBottom: '10%',
  },
  logo: {
    width: 250, // ajusta el tamaño de la imagen según sea necesario
    height: 100, // ajusta el tamaño de la imagen según sea necesario
  },
  formContainer: {
    width: '80%',
    padding: 25,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 5,
    overflow: 'hidden',
  },

  btnContinue: {
    backgroundColor: MyColor.primary,
    marginHorizontal: 20,
    marginTop: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textBtn: {
    fontWeight: 'bold',
    fontSize: RFValue(14, 580),
    marginHorizontal: 20,
    color: '#ffff',
  },
  textLabelLogin: {
    fontSize: RFValue(14, 580),
    flexDirection:'column',
    marginBottom:'10%',
    textAlign: 'center',
    color: MyColor.black,
    fontWeight: 'bold',
  },
  textLabelLoginIso: {
    fontSize: RFValue(14, 580),
    flexDirection:'column',
    marginBottom:'5%',
    textAlign: 'center',
    color: MyColor.home,
    fontWeight: 'bold',
  },
});

export default LoginStyles;

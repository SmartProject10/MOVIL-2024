import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MyColor} from '../../theme/AppTheme';

const JobsListStyles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentInit: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  textInit: {
    fontSize: RFValue(20, 500),
    color: MyColor.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInitLabel: {
    fontSize: RFValue(10, 500),
    color: MyColor.grayLabel,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labelJobs: {
    fontSize: RFValue(15, 500),
    fontWeight: 'bold',
    color: MyColor.black,
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  headerText: {
    fontSize: 16,
  },
  alert: {
    height: '15%',
    borderRadius: 10,
    width: '90%',
    marginHorizontal: 20,
    backgroundColor: MyColor.primary,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4}, // Ajustado para sombra más desvanecida
    shadowOpacity: 0.5, // Más desvanecida
    shadowRadius: 1, // Radio mayor para un desenfoque más suave
    // Propiedad para la sombra en Android
    elevation: 15,
  },
  textAlert: {
    color: MyColor.black,
    fontSize: RFValue(10, 500),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default JobsListStyles;

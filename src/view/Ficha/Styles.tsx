import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MyColor} from '../../theme/AppTheme';

const FichaStyles = StyleSheet.create({
  content: {
    flex:1,
    
    marginTop: 10,

  },
  contentInit: {
    marginBottom: 20,
    marginLeft: 10,
  },
  textInit: {
    fontSize: RFValue(25, 500),
    color: MyColor.black,
    fontWeight: 'bold',
  },
  labelJobs: {
    fontSize: RFValue(15, 500),
    fontWeight: 'bold',
    color: MyColor.black,
  },
  container: {
    flex:1,
    
  },
  header: {
    backgroundColor: '#f1f1f1',
    padding: 10,
  },
  headerText: {
    fontSize: 16,
  },

});

export default FichaStyles;

import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MyColor} from '../../theme/AppTheme';

const FichaUsersStyles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentAlt: {
    flex: 1,
    
    
    backgroundColor: MyColor.black,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  vieAvatar: {
    marginTop: 10,
  },
  textLabelAvat: {
    textAlign:'center',
    color: MyColor.home,
    marginVertical: 4,
  },
  contentAltB: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    backgroundColor: MyColor.home,
  },
  labeltareas: {
    color: MyColor.bluelabel,
    fontSize: RFValue(12, 500),
    marginLeft: 15,
    marginTop: 10,
    textDecorationLine: 'underline',
    fontWeight: '900',
  },
  horizontalScrollView: {
    flexDirection: 'row',
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 400,
    height: 350,
    borderRadius: 8,
  },
  labelAnuncios: {
    marginVertical: 10,
    marginLeft: 10,
    fontSize: RFValue(17, 500),
    color: MyColor.black,
    fontWeight: '500',
    flex: 1,
    flexDirection: 'row',
  },
});

export default FichaUsersStyles;

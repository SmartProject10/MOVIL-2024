import {Dimensions, StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {MyColor} from '../../../../theme/AppTheme';

const ListInspectStyle = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentTitle: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: RFValue(10, 500),
    color: MyColor.black,
    marginLeft: 5,
    fontWeight:'500'
  },
  contentCard: {
    marginHorizontal: 13,
    borderRadius: 10,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    height: 50,
    backgroundColor: MyColor.home,
  },
  labelCard: {
    marginTop:5,
    marginLeft: 10,
    color: MyColor.black,
  },
  ro: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,

  },
});

export default ListInspectStyle;

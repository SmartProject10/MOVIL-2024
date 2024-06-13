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
    textAlign: 'center',
    color: MyColor.home,
    marginVertical: 4,
  },
  contentAltB: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: MyColor.home,
  },
  labeltareas: {
    color: MyColor.black,
    fontSize: RFValue(10, 500),
    marginLeft: 15,
    marginTop: 10,
    fontWeight: '500',
  },
  horizontalScrollView: {
    borderRadius: 20,
    marginHorizontal: 5,
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
    fontSize: RFValue(10, 500),
    color: MyColor.black,
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    position: 'absolute',
    flex: 1,
  },
  overlay: {
    width: '100%',
    height: 100,
    backgroundColor: '#000000',

    position: 'absolute',
  },
  header: {
    paddingTop: 20,
    flex:1,
    
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    marginBottom:10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  contentDescription: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: RFValue(10, 500),
    color: MyColor.black,
  },
  occupation: {
    fontSize: RFValue(10, 500),
    color: MyColor.black,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 20,
  },
  followButton: {
    backgroundColor: '#1DA1F2',
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  messageButton: {
    borderColor: '#1DA1F2',
    paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 10,
  },
  messageButtonText: {
    color: '#1DA1F2',
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  description: {
    padding: 20,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FichaUsersStyles;

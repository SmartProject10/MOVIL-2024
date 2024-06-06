import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/HomeStackNavigation';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Avatar, Button, ListItem} from '@rneui/base';
import {MyColor} from '../../theme/AppTheme';
import styles from './Styles';

interface Props
  extends StackScreenProps<HomeStackParamList, 'JobsListScreen'> {}
export const JobsListScreen = ({navigation}: Props) => {
  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <View style={styles.contentInit}>
        <Text style={styles.textInit}>Solicitudes pendientes</Text>
        <Text style={styles.textInitLabel}>
          Estás empresas te dan la bienvenida para trabajar en sus módulos
        </Text>
      </View>

      <ScrollView>
        <ListItem bottomDivider>
          <Avatar
            containerStyle={{
              backgroundColor: '#BDBDBD',
              borderRadius: 15,
            }}
            avatarStyle={{borderRadius: 15}}
            size="large"
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
          />
          <ListItem.Content>
            <ListItem.Title>Empresa la Condenada</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right>
            <ListItem.Title right>
              <Button
                title="Aceptar"
                color={MyColor.primary}
                buttonStyle={{
                  borderRadius: 10,
                }}
              />
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider>
          <Avatar
            containerStyle={{
              backgroundColor: '#BDBDBD',
              borderRadius: 15,
            }}
            avatarStyle={{borderRadius: 15}}
            size="large"
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
          />
          <ListItem.Content>
            <ListItem.Title>Empresa la Condenada</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right>
            <ListItem.Title right>
              <Button
                title="Aceptar"
                color={MyColor.primary}
                buttonStyle={{
                  borderRadius: 10,
                }}
              />
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Avatar
            containerStyle={{
              backgroundColor: '#BDBDBD',
              borderRadius: 15,
            }}
            avatarStyle={{borderRadius: 15}}
            size="large"
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
          />
          <ListItem.Content>
            <ListItem.Title>Empresa la Condenada</ListItem.Title>
          </ListItem.Content>
          <ListItem.Content right>
            <ListItem.Title right>
              <Button
                title="Aceptar"
                color={MyColor.primary}
                buttonStyle={{
                  borderRadius: 10,
                }}
              />
            </ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </ScrollView>
    </View>
  );
};

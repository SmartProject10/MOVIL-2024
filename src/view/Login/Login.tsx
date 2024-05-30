import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/MainStackNavigation';
import {
  TextInput,
  View,
  Button,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import styles from './Styles';
import Svg, {Path} from 'react-native-svg';

import DI from '../../di/ioc';
import {DefaultTextInput} from '../../components/DefaultTextInput';
import {MyColor} from '../../theme/AppTheme';

interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const {sms, email, password, onChangeLogin, nav, navigationHome} =
    DI.resolve('LoginViewModel');

  useEffect(() => {
    if (nav) {
      navigation.replace('TabsNavigator');
    }
  }, [nav]);

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={MyColor.black} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/img/logof.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.textLabelLoginIso}>Iso and Iso</Text>
      </View>
      <View style={styles.topContainer}>
        <Svg height="230%" width="230%" viewBox="0 0 1440 320">
          <Path
            fill={MyColor.black}
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            transform="rotate(180 720 160)"
          />
        </Svg>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.textLabelLogin}>Inicio de sesión</Text>
        <DefaultTextInput
          placeholder="Correo electrónico"
          prop="email"
          value={email}
          onChangeText={onChangeLogin}
        />
        <View style={{marginTop: 10}}>
          <DefaultTextInput
            placeholder="Contraseña"
            prop="password"
            value={password}
            secureTextEntry={true}
            onChangeText={onChangeLogin}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnContinue} onPress={() => navigationHome()}>
          <Text style={styles.textBtn}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

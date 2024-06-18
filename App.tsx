import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation/MainStackNavigation';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import { m3Theme } from './src/theme/AppTheme';
const themeMaterial = {
  ...DefaultTheme,
  colors: m3Theme.colors, // Copy it from the color codes scheme and then use it here
};
function App(): JSX.Element {
  return (
    <PaperProvider theme={themeMaterial}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

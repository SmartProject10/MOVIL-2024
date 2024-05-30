import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigation/MainStackNavigation';


function App(): JSX.Element {
  return (
    
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
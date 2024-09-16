import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import TelaCronometro from '.src/View/TelaCronometro';
import TelaConfiguracao from '.src/View/TelaConfiguracao';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cronômetro">
          <Stack.Screen 
            name="Cronômetro" 
            component={TelaCronometro} 
            options={{ title: 'Cronômetro' }} 
          />
          <Stack.Screen 
            name="Configuração" 
            component={TelaConfiguracao} 
            options={{ title: 'Configuração' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

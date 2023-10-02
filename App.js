import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './Telas/Login/Login';
import Lista from './Telas/Lista/Lista';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Lista'
          component={Lista}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
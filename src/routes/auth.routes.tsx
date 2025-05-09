import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ficha3 from '../pages/Ficha3/Fichadiligencia3';

const Stack = createNativeStackNavigator();


function AuthRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Ficha3" component={Ficha3} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}


export default AuthRoutes;
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home';
import HomeRing from '../pages/HomeRing';
import SignUp from '../pages/SignUp';

const Routes = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name="Screen1" component={Home} />
        <RootStack.Screen name="Screen2" component={HomeRing} />
        <RootStack.Screen name="Login" component={SignUp} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import screens from '../screen';
import Home from '../Components/Home/index';
import TestZustand from '../Components/TestZustand';
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screens.HOME} component={Home} />
      <Stack.Screen name={screens.TEST_ZUSTAND} component={TestZustand} />
    </Stack.Navigator>
  );
};

export default RootStack;


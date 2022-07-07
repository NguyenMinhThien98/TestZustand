import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screens from "../screen";
import Login from '../Components/Login/index';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={screens.LOGIN} component={Login}/>

        </Stack.Navigator>
    )
}

export default AuthStack
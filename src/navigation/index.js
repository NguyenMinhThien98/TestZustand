import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import RootStack from './RootStack';
import { useSelector } from 'react-redux';



const AppNavigator = () => {
    const currentUser = useSelector(state => state.Login.currentUser);
    return (
        <NavigationContainer>
            {currentUser ? <RootStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default AppNavigator;
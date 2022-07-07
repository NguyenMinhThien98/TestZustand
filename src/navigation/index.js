import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import RootStack from './RootStack';


const AppNavigator = () => {
    return (
        <NavigationContainer>
            {/* <AuthStack /> */}
            <RootStack/>
        </NavigationContainer>
    )
}

export default AppNavigator;
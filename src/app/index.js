import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import AppNavigator from '../navigation';
import { NativeBaseProvider } from 'native-base';
const AppInit = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default AppInit


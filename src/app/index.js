import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import AppNavigator from '../navigation';
const AppInit = () => {
  return (
    <SafeAreaView style={styles.container}>
        <AppNavigator/>
    </SafeAreaView>
  )
}

export default AppInit

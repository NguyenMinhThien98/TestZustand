import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Heading} from 'native-base';
import styles from './styles';

import React from 'react';


const Login = () => {
 
  return (
    <ScrollView style={styles.container}> 
      <Heading style={styles.heading}>Login</Heading>
    </ScrollView>
  );
};



export default Login;

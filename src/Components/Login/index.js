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
import useLoginFacade from './hooks';
import React from 'react';
import styles from './styles';

const Login = () => {
  const {isVisivle, images, onShowModal, onTogleModal, onLauchLibrary, onLauchCamera} =
    useLoginFacade();
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} >
      <View style={{flexDirection: 'column'}}>
        <Text style={[styles.heading, {marginBottom: 10, color: '#000'}]}>
          Login
        </Text>
        {images.map((item, index) => {
          console.log(`Item ${item}`);
          return (
            <Image
              style={{width: '90%', height: 400, marginBottom: 10}}
              key={index}
              source={{uri: item}}
              resizeMode="contain"
            />
          );
        })}
        <TouchableOpacity style={styles.buttonContainer} onPress={onShowModal}>
          <Text style={styles.heading}>Onpress</Text>
        </TouchableOpacity>
        <Modal
          visible={isVisivle}
          animationType="slide"
          transparent={false}
          onDismiss={() => console.log('Diss miss')}>
          <View style={{height: '40%', marginTop: 'auto'}}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={onTogleModal}>
              <Text style={styles.heading}>HIDE MODAL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonContainer, {backgroundColor: 'green'}]}
              onPress={onLauchLibrary}>
              <Text style={styles.heading}>LAUCH LIBRARY</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonContainer, {backgroundColor: 'red'}]}
              onPress={onLauchCamera}>
              <Text style={styles.heading}>LAUCH CAMERA</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Login;

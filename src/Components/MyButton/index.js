import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const MyButton = ({title, onPress, containerStyle, inputProps}) => {

  console.log('--title',title)
  return (
    <TouchableOpacity
    style={[styles.container, containerStyle]}
    onPress={onPress}
    {...inputProps}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 70,
    borderRadius: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  text: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default MyButton;

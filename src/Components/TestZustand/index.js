import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useStore } from 'zustand';


const TestZustand = () => {
    // const count = useStore(state => state.count);
    // console.log(count);
    return (
    <View>
      <Text>Test</Text>
    </View>
  );
};

export default TestZustand;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

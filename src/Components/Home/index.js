import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useHomeFacade} from './hooks';
import MyButton from '../MyButton';
import React from 'react';

const Home = () => {
  const {data, onPressItem} = useHomeFacade();

  return (
    <View style={[styles.container, styles.center]}>
      <FlatList
        style={styles.container}
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <MyButton
            containerStyle={styles.center}
            key={item.id}
            title={item.name}
            onPress={() => onPressItem && onPressItem(item.screen)}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    alignSelf: 'center'

  },
  box: {
    flex: 1,
    flexDirection: 'column',
  },
});

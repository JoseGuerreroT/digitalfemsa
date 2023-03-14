import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TransactionFooter from '../TransactionFooter';
import TransactionItem from '../TransactionItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const TransactionList = () => {
  return (
    <View>
      <FlatList
        data={DATA}
        style={styles.container}
        renderItem={({item}) => <TransactionItem />}
        keyExtractor={item => item.id}
      />
      <TransactionFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
  },
});

export default TransactionList;

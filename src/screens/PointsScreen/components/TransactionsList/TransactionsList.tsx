import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TransactionFooter from '../TransactionFooter';

import TransactionItem from '../TransactionItem';
import {Product} from '../../../../models/Product';

type TransactionListProps = {
  products: Product[];
};

const TransactionList: React.FC<TransactionListProps> = ({products}) => {
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item}) => <TransactionItem product={item} />}
          keyExtractor={item => item.id}
        />
      </View>
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
    maxHeight: 350,
  },
});

export default TransactionList;

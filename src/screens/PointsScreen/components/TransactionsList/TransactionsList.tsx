import React, {useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TransactionFooter from '../TransactionFooter';

import TransactionItem from '../TransactionItem';
import {Product} from '../../../../models/Product';
import {FilterProduct} from '../../models/filterProduct';

type TransactionListProps = {
  products: Product[];
};

const filtersProduct: Record<FilterProduct, (product: Product) => Boolean> = {
  ALL: () => true,
  REDEEMED: product => product.is_redemption,
  EARNED: product => !product.is_redemption,
};

const TransactionList: React.FC<TransactionListProps> = ({products}) => {
  const [filterSelected, setFilterSelected] =
    React.useState<FilterProduct>('ALL');
  return (
    <View>
      <View style={styles.container}>
        <FlatList
          data={products.filter(filtersProduct[filterSelected])}
          renderItem={({item}) => <TransactionItem product={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <TransactionFooter
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
      />
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

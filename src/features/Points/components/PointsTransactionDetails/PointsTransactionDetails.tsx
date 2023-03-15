import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Product} from '../../models/Product';
import TransactionDetailsImage from '../TransactionDetailsImage';
import TransactionsDetailsFooter from '../TransactionsDetailsFooter';

type PointsTransactionDetailsProps = {
  product: Product;
  onSubmit: () => void;
};

const PointsTransactionDetails: React.FC<PointsTransactionDetailsProps> = ({
  product,
  onSubmit,
}) => {
  return (
    <View style={styles.container}>
      <TransactionDetailsImage image={product.image} />
      <TransactionsDetailsFooter
        createdAt={product.createdAt}
        points={product.points}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default PointsTransactionDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

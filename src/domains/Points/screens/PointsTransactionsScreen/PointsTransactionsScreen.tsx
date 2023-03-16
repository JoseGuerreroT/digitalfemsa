import React from 'react';
import {Product} from '../../models/Product';
import {PointsTransactionsScreenType} from './PointsTransactionsScreen.types';
import PointsTransactions from '../../components/PointsTransactions';
import {PointsRoutes} from '../../routes/types';

const PointsTransactionsScreen: React.FC<PointsTransactionsScreenType> = ({
  navigation,
}) => {
  const onTransactionPress = (product: Product) =>
    navigation.navigate(PointsRoutes.POINTS_TRANSACTIONS_DETAILS, {product});

  return <PointsTransactions onTransactionPress={onTransactionPress} />;
};

export default PointsTransactionsScreen;

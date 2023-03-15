import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import PointsCard from '../PointsCard';
import PointsHeader from '../PointsHeader';
import TransactionsList from '../TransactionsList';
import Text from '../../../../core/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSWR from 'swr';
import {Product} from '../../models/Product';
import {getProducts, PRODUCTS_ENDPOINT} from '../../services/product';
import {getTotalPoints} from '../../utils/getTotalPoints';

type PointsTransactionsProps = {
  onTransactionPress: (product: Product) => void;
};

const PointsTransactions: React.FC<PointsTransactionsProps> = ({
  onTransactionPress,
}) => {
  //   const {data, loading, error} = useQuery(GET_POINTS);
  const {
    data: products,
    isLoading,
    error,
  } = useSWR<Product[]>(PRODUCTS_ENDPOINT, getProducts);

  const totalPoints = getTotalPoints(products);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error al cargar</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <PointsHeader />
      <Text style={styles.subtitle}>TUS PUNTOS</Text>
      <PointsCard points={totalPoints} />
      <Text style={styles.subtitle}>TUS MOVIMIENTOS</Text>
      <TransactionsList
        onTransactionPress={onTransactionPress}
        products={products!}
      />
    </SafeAreaView>
  );
};

export default PointsTransactions;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#9B9898',
    marginVertical: 20,
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';
import PointsCard from './components/PointsCard';
import PointsHeader from './/components/PointsHeader';
import TransactionsList from './components/TransactionsList';
import Text from '../../core/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import useSWR from 'swr';
import {Product} from '../../models/Product';
import {getProducts, PRODUCTS_ENDPOINT} from './services/product';
import {getTotalPoints} from './utils/getTotalPoints';

const PointsScreen: React.FC<{}> = () => {
  //   const {data, loading, error} = useQuery(GET_POINTS);
  const {data: products, isLoading} = useSWR<Product[]>(
    PRODUCTS_ENDPOINT,
    getProducts,
  );
  const totalPoints = getTotalPoints(products);
  //   if (loading) {
  //     return <Text>Loading...</Text>;
  //   }
  //   if (error) {
  //     return <Text>Error :(</Text>;
  //   }
  console.log('data', products);

  return (
    <SafeAreaView style={styles.container}>
      <PointsHeader />
      <Text style={styles.subtitle}>TUS PUNTOS</Text>
      <PointsCard points={totalPoints} />
      <Text style={styles.subtitle}>TUS MOVIMIENTOS</Text>
      <TransactionsList products={products!} />
    </SafeAreaView>
  );
};

export default PointsScreen;

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

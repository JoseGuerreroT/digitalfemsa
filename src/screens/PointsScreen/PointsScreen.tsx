import React from 'react';
import {StyleSheet, View} from 'react-native';
import PointsCard from './PointsCard';
import PointsHeader from './PointsHeader';
import TransactionsList from './TransactionsList';
import Text from '../../core/Text';

const PointsScreen: React.FC<{}> = () => {
  //   const {data, loading, error} = useQuery(GET_POINTS);

  //   if (loading) {
  //     return <Text>Loading...</Text>;
  //   }
  //   if (error) {
  //     return <Text>Error :(</Text>;
  //   }

  return (
    <View style={styles.container}>
      <PointsHeader />
      <Text style={styles.subtitle}>TUS PUNTOS</Text>
      <PointsCard />
      <Text style={styles.subtitle}>TUS MOVIMIENTOS</Text>
      <TransactionsList />
    </View>
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

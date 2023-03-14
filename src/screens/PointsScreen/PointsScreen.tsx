import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Button from '../../core/Button';
import PointsCard from './PointsCard';
import PointsHeader from './PointsHeader';
import PointsSubtitle from './PointsSubtitle';
import TransactionsList from './TransactionsList';

const PointsScreen: React.FC<{}> = () => {
  //   const {data, loading, error} = useQuery(GET_POINTS);

  //   if (loading) {
  //     return <Text>Loading...</Text>;
  //   }
  //   if (error) {
  //     return <Text>Error :(</Text>;
  //   }

  return (
    <SafeAreaView style={styles.container}>
      <PointsHeader />
      <PointsSubtitle txt="TUS PUNTOS" />
      <PointsCard />
      <PointsSubtitle txt="TUS MOVIMIENTOS" />
      <TransactionsList />
    </SafeAreaView>
  );
};

export default PointsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
  },
});

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import TransactionDetailsImage from './TransactionDetailsImage';

const TransactionDetailsScreen: React.FC<{}> = () => {
  //   const {data, loading, error} = useQuery(GET_POINTS);

  //   if (loading) {
  //     return <Text>Loading...</Text>;
  //   }
  //   if (error) {
  //     return <Text>Error :(</Text>;
  //   }

  return (
    <View style={styles.container}>
      <TransactionDetailsImage />
    </View>
  );
};

export default TransactionDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 24,
  },
});

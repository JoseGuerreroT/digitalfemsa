import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import TransactionDetailsHeader from './TransactionDetailsHeader';
import TransactionDetailsImage from './TransactionDetailsImage';
import TransactionsDetailsFooter from './TransactionsDetailsFooter';

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
      <TransactionsDetailsFooter />
    </View>
  );
};

export default TransactionDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

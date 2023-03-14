import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Text from '../../../core/Text';
const TransactionDetailHeader: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Nombre del producto</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 102,
    backgroundColor: '#CFD6FF',
  },
  title: {
    fontSize: 24,
  },
});

export default TransactionDetailHeader;

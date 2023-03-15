import React from 'react';
import {StyleSheet, View} from 'react-native';

import Button from '../../../../core/Button';

const showAllButton = false;

const TransactionFooter: React.FC<{}> = () => {
  const FilterButton = () => (
    <View style={styles.filter}>
      <Button
        style={[styles.button, styles.buttonDivider]}
        size="small"
        title="Ganados"
      />
      <Button style={styles.button} size="small" title="Canjeados" />
    </View>
  );
  return (
    <View style={styles.container}>
      {showAllButton ? <Button title="Todos" /> : <FilterButton />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  filter: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  buttonDivider: {
    marginRight: 10,
  },
});

export default TransactionFooter;

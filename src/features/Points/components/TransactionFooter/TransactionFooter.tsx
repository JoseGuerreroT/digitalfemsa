import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../../../core/Button';
import {FilterProduct} from '../../models/Product';

type TransactionFooterProps = {
  filterSelected: FilterProduct;
  setFilterSelected: (filter: FilterProduct) => void;
};

const TransactionFooter: React.FC<TransactionFooterProps> = ({
  filterSelected,
  setFilterSelected,
}) => {
  const FilterButton = () => (
    <View style={styles.filter}>
      <Button
        style={[styles.button, styles.buttonDivider]}
        size="small"
        title="Ganados"
        accessibilityLabel="earned-button"
        onPress={() => setFilterSelected('EARNED')}
      />
      <Button
        style={styles.button}
        size="small"
        title="Canjeados"
        accessibilityLabel="redeemed-button"
        onPress={() => setFilterSelected('REDEEMED')}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      {filterSelected !== 'ALL' ? (
        <Button
          title="Todos"
          onPress={() => setFilterSelected('ALL')}
          accessibilityLabel="all-button"
        />
      ) : (
        <FilterButton />
      )}
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

import React from 'react';
import {StyleSheet, View} from 'react-native';

import Text from '../../../../core/Text';

type TransactionDetailHeaderProps = {
  name: string;
};

const TransactionDetailHeader: React.FC<TransactionDetailHeaderProps> = ({
  name,
}) => (
  <View style={styles.container}>
    <Text weight="bold" style={styles.title}>
      {name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 150,
    backgroundColor: '#CFD6FF',
    justifyContent: 'flex-end',
  },
  title: {
    marginBottom: 24,
    fontSize: 24,
  },
});

export default TransactionDetailHeader;

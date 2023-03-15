import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../../../core/Button';
import Text from '../../../../core/Text';

type TransactionDetailsFooterProps = {
  onSubmit: () => void;
};

const TransactionDetailsFooter: React.FC<TransactionDetailsFooterProps> = ({
  onSubmit,
}) => {
  return (
    <View>
      <Text weight="800" style={styles.title}>
        Detalles del producto:
      </Text>
      <Text weight="800" style={styles.descriptionTxt}>
        Comprado el 26 de enero, 2019
      </Text>
      <Text weight="800" style={styles.subtitle}>
        Con esta compra acumulaste:
      </Text>
      <Text weight="800" style={styles.pointsTxt}>
        100 puntos
      </Text>
      <Button onPress={onSubmit} title="Aceptar" />
    </View>
  );
};

export default TransactionDetailsFooter;

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    marginBottom: 20,
    fontSize: 14,
    color: '#9B9898',
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 32,
    fontSize: 14,
    color: '#9B9898',
  },
  pointsTxt: {
    fontSize: 24,
    marginBottom: 47,
  },
  descriptionTxt: {
    fontSize: 16,
  },
});

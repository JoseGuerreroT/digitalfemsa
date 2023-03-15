import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../../../../core/Button';
import Text from '../../../../core/Text';
import {
  getTextualDateFormat,
  getThousandFormat,
} from '../../../../utils/formatString';

type TransactionDetailsFooterProps = {
  createdAt: string;
  points: number;
  onSubmit: () => void;
};

const TransactionDetailsFooter: React.FC<TransactionDetailsFooterProps> = ({
  onSubmit,
  createdAt,
  points,
}) => {
  return (
    <View>
      <Text weight="800" style={styles.title}>
        Detalles del producto:
      </Text>
      <Text weight="800" style={styles.descriptionTxt}>
        Comprado el {getTextualDateFormat(createdAt)}
      </Text>
      <Text weight="800" style={styles.subtitle}>
        Con esta compra acumulaste:
      </Text>
      <Text weight="800" style={styles.pointsTxt}>
        {getThousandFormat(points)} puntos
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

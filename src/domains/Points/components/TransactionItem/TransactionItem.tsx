import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import ArrowIcon from '../../../../assets/icons/ArrowIcon';
import Text from '../../../../core/Text';
import {
  getTextualDateFormat,
  getThousandFormat,
} from '../../utils/formatString';
import {Product} from '../../models/Product';

type TransactionItemProps = {
  product: Product;
  onTransactionPress: (product: Product) => void;
};

const DefaultImage = require('../../../../assets/images/placerholder-transaction-item-thumbnail.png');

const TransactionItem: React.FC<TransactionItemProps> = ({
  product,
  onTransactionPress,
}) => {
  const NegativeSymbol = () => (
    <Text weight="bold" style={styles.negativeTxt}>
      -
    </Text>
  );

  const PositiveSymbol = () => (
    <Text weight="bold" style={styles.positiveTxt}>
      +
    </Text>
  );

  return (
    <TouchableOpacity
      accessibilityLabel={`transaction-item-${product.id}`}
      onPress={() => onTransactionPress(product)}
      style={styles.container}>
      <View style={styles.section}>
        <Image
          source={product.image ? {uri: product.image} : DefaultImage}
          style={styles.image}
        />
        <View>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            weight="bold"
            style={styles.productNameTxt}>
            {product.product}
          </Text>
          <Text style={styles.dateTxt}>
            {getTextualDateFormat(product.createdAt)}
          </Text>
        </View>
      </View>
      <View style={styles.section}>
        {product.is_redemption ? <NegativeSymbol /> : <PositiveSymbol />}
        <Text weight="bold" style={styles.amountTxt}>
          {getThousandFormat(product.points)}
        </Text>
        <ArrowIcon />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  image: {
    marginRight: 10,
    width: 50,
    height: 50,
    borderWidth: 5,
    borderColor: '#D0D0D0',
    borderRadius: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productNameTxt: {
    fontSize: 14,
    marginBottom: 6,
  },
  dateTxt: {
    fontSize: 12,
  },
  positiveTxt: {
    fontSize: 16,
    color: '#00B833',
  },
  negativeTxt: {
    fontSize: 16,
    color: '#FF0000',
  },
  amountTxt: {
    fontSize: 16,
    marginRight: 20,
  },
  arrow: {
    backgroundColor: '#070707',
  },
});

export default TransactionItem;

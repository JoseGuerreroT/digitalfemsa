import {Image, StyleSheet, View} from 'react-native';

import Text from '../../../../core/Text';
import ArrowIcon from '../../../../assets/icons/ArrowIcon';
import {Product} from '../../../../models/Product';

type TransactionItemProps = {
  product: Product;
};

const DefaultImage = require('../../../../assets/images/placerholder-transaction-item-thumbnail.png');

const TransactionItem: React.FC<TransactionItemProps> = ({product}) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <Image
        source={product.image ? {uri: product.image} : DefaultImage}
        style={styles.image}
      />
      <View>
        <Text weight="bold" style={styles.productNameTxt}>
          {product.product}
        </Text>
        <Text style={styles.dateTxt}>26 de enero, 2019</Text>
      </View>
    </View>
    <View style={styles.section}>
      <Text weight="bold" style={styles.positiveTxt}>
        +
      </Text>
      <Text weight="bold" style={styles.amountTxt}>
        {product.points}
      </Text>
      <ArrowIcon />
    </View>
  </View>
);

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
  amountTxt: {
    fontSize: 16,
    marginRight: 20,
  },
  arrow: {
    backgroundColor: '#070707',
  },
});

export default TransactionItem;

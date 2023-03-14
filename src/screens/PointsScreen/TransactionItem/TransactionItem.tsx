import Text from '../../../core/Text';
import {Image, StyleSheet, View} from 'react-native';
import ArrowIcon from '../../../assets/icons/ArrowIcon';

const TransactionItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          source={require('../../../assets/images/placerholder-trasaction-item-thumbnail.png')}
          style={styles.image}
        />
        <View>
          <Text weight="bold" style={styles.productNameTxt}>
            Nombre del Producto
          </Text>
          <Text style={styles.dateTxt}>26 de enero, 2019</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text weight="bold" style={styles.positiveTxt}>
          +
        </Text>
        <Text weight="bold" style={styles.amountTxt}>
          100
        </Text>
        <ArrowIcon />
      </View>
    </View>
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

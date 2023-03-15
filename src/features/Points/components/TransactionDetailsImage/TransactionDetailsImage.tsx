import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const DEFAULT_IMAGE = require('../../../../assets/images/placerholder-trasaction-item.png');

type TransactionDetailsImageProps = {
  image?: string;
};

const TransactionDetailsImage: React.FC<TransactionDetailsImageProps> = ({
  image,
}) => (
  <View style={styles.container}>
    <Image source={image ? {uri: image} : DEFAULT_IMAGE} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 75,
    backgroundColor: '#FFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default TransactionDetailsImage;

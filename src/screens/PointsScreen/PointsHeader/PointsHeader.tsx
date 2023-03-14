import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../../core/Text';

const PointsHeader: React.FC<{}> = () => (
  <View>
    <Text weight="bold" style={styles.title}>
      Bienvenido de vuelta!
    </Text>
    <Text style={styles.subtitle}>Ruben Rodriguez</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  },
});

export default PointsHeader;

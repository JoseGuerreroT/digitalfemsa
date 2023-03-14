import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text style={styles.subtitle}>Ruben Rodriguez</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {},
  title: {
    fontSize: 23,
  },
  subtitle: {
    fontSize: 18,
  },
});

export default Header;

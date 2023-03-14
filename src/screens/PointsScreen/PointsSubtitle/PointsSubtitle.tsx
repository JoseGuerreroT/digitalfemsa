import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../../core/Text';

type PointsSubtitleProps = {
  txt: string;
};

const PointsSubtitle: React.FC<PointsSubtitleProps> = ({txt}) => {
  return (
    <Text weight="800" style={styles.title}>
      {txt}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: '#9B9898',
    marginVertical: 20,
  },
});

export default PointsSubtitle;

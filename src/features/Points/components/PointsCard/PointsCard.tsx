import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../../../core/Text';
import {getThousandFormat} from '../../utils/formatString';

type PointsCardProps = {
  points: number;
};
const PointsCard: React.FC<PointsCardProps> = ({points}) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <View style={styles.content}>
        <Text weight="800" style={styles.header}>
          Diciembre
        </Text>
        <Text weight="800" style={styles.contentTxt}>
          {getThousandFormat(points)} pts
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#334FFA',
    borderRadius: 20,
    padding: 20,
    minHeight: 143,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    width: '81%',
  },
  container: {
    alignItems: 'center',
  },
  contentTxt: {
    color: '#fff',
    fontSize: 32,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 16,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 14,
    color: '#9B9898',
    marginBottom: 20,
  },
});

export default PointsCard;

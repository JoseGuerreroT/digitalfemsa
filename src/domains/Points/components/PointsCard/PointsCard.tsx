import React from 'react';
import {View} from 'react-native';
import Text from '../../../../core/Text';
import {getThousandFormat} from '../../utils/formatString';
import {pointsCardStyles as styles} from './PointsCard.style';

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

export default PointsCard;

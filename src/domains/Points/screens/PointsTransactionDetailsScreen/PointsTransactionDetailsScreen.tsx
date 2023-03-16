import React from 'react';
import {StyleSheet} from 'react-native';
import PointsTransactionDetails from '../../components/PointsTransactionDetails';
import {PointsTransactionDetailsScreenType} from './PointsTransactionDetailsScreen.types';

const PointsTransactionDetailsScreen: React.FC<
  PointsTransactionDetailsScreenType
> = ({route, navigation}) => {
  const {product} = route.params;
  const goBack = () => navigation.goBack();
  //   const {data, loading, error} = useQuery(GET_POINTS);

  //   if (loading) {
  //     return <Text>Loading...</Text>;
  //   }
  //   if (error) {
  //     return <Text>Error :(</Text>;
  //   }

  return <PointsTransactionDetails product={product} onSubmit={goBack} />;
};

export default PointsTransactionDetailsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

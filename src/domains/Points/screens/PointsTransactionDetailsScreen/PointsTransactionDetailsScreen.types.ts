import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PointsRoutesParamList, PointsRoutes} from '../../routes/types';

type PointsTransactionDetailsScreenNavigationType = NativeStackNavigationProp<
  PointsRoutesParamList,
  PointsRoutes.POINTS_TRANSACTIONS_DETAILS
>;

type PointsTransactionDetailsScreenRouteType = RouteProp<
  PointsRoutesParamList,
  PointsRoutes.POINTS_TRANSACTIONS_DETAILS
>;

export type PointsTransactionDetailsScreenType = {
  navigation: PointsTransactionDetailsScreenNavigationType;
  route: PointsTransactionDetailsScreenRouteType;
};

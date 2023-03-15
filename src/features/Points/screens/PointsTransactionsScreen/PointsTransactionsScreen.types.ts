import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PointsRoutesParamList, PointsRoutes} from '../../routes/types';

type PointsTransactionsScreenNavigationType = NativeStackNavigationProp<
  PointsRoutesParamList,
  PointsRoutes.POINTS_TRANSACTIONS
>;

type PointsTransactionsScreenRouteType = RouteProp<
  PointsRoutesParamList,
  PointsRoutes.POINTS_TRANSACTIONS
>;

export type PointsTransactionsScreenType = {
  navigation: PointsTransactionsScreenNavigationType;
  route: PointsTransactionsScreenRouteType;
};

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import TransactionDetailHeader from '../components/TransactionDetailsHeader/TransactionDetailsHeader';
import PointsTransactionDetailsScreen from '../screens/PointsTransactionDetailsScreen';
import PointsTransactionsScreen from '../screens/PointsTransactionsScreen';
import {PointsRoutes, PointsRoutesParamList} from './types';

export const pointsRoutes: Record<
  PointsRoutes,
  NativeStackScreenProps<PointsRoutesParamList>
> = {
  [PointsRoutes.POINTS_TRANSACTIONS]: {
    name: PointsRoutes.POINTS_TRANSACTIONS,
    component: PointsTransactionsScreen,
    options: {
      headerShown: false,
    },
  },
  [PointsRoutes.POINTS_TRANSACTIONS_DETAILS]: {
    name: PointsRoutes.POINTS_TRANSACTIONS_DETAILS,
    component: PointsTransactionDetailsScreen,
    options: {
      header: ({route}) => (
        <TransactionDetailHeader name={route.params.product.product} />
      ),
    },
  },
};

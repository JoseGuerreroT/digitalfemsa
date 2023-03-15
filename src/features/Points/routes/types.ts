import {Product} from '../models/Product';

export enum PointsRoutes {
  POINTS_TRANSACTIONS = 'PointsTransactions',
  POINTS_TRANSACTIONS_DETAILS = 'PointsTransactionDetails',
}

export type PointsRoutesParamList = {
  [PointsRoutes.POINTS_TRANSACTIONS]: undefined;
  [PointsRoutes.POINTS_TRANSACTIONS_DETAILS]: {
    product: Product;
  };
};

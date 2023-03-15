import {Product} from '../../../models/Product';
export const getTotalPoints = (products?: Product[]) =>
  products
    ? products.reduce((totalPoints, product) => {
        return totalPoints + product.points;
      }, 0)
    : 0;

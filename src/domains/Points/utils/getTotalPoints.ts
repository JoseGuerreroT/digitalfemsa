import {Product} from '../models/Product';

export const getTotalPoints = (products?: Product[]) =>
  products
    ? products.reduce((totalPoints, product) => {
        const symbol = product.is_redemption ? -1 : 1;
        return totalPoints + product.points * symbol;
      }, 0)
    : 0;

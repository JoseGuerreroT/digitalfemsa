import {Product} from '../../models/Product';
import {getTotalPoints} from '../../utils/getTotalPoints';
import {mockProducts} from '../mocks/product.mock';

describe('getTotalPoints', () => {
  test('01 - returns the correct total points when passed an array of products', () => {
    const expectedTotalPoints = -400;

    const totalPoints = getTotalPoints(mockProducts);

    expect(totalPoints).toEqual(expectedTotalPoints);
  });

  test('02 - returns 0 when passed an empty array', () => {
    const products: Product[] = [];
    const expectedTotalPoints = 0;

    const totalPoints = getTotalPoints(products);

    expect(totalPoints).toEqual(expectedTotalPoints);
  });

  test('03 - returns 0 when passed undefined', () => {
    const products: undefined = undefined;
    const expectedTotalPoints = 0;

    const totalPoints = getTotalPoints(products);

    expect(totalPoints).toEqual(expectedTotalPoints);
  });
});

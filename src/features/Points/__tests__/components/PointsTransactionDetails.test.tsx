import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PointsTransactionDetails from '../../components/PointsTransactionDetails';
import {Product} from '../../models/Product';

describe('PointsTransactionDetails', () => {
  const mockProduct: Product = {
    createdAt: '2022-01-01T12:00:00Z',
    product: 'Product Name',
    points: 100,
    image: 'https://example.com/image.png',
    is_redemption: false,
    id: 'abc123',
  };

  test('01 - renders product details', () => {
    const {findByRole, debug} = render(
      <PointsTransactionDetails product={mockProduct} onSubmit={() => {}} />,
    );
    const productPointsSection = findByRole('row');
    const productImage = findByRole('img');

    expect(productPointsSection).toBeDefined();
    expect(productImage).toBeDefined();
  });

  test('02 - calls onSubmit when submit button is pressed', () => {
    const handleSubmit = jest.fn();
    const {debug, getByLabelText} = render(
      <PointsTransactionDetails
        product={mockProduct}
        onSubmit={handleSubmit}
      />,
    );

    const submitButton = getByLabelText('submit-button');

    fireEvent.press(submitButton);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});

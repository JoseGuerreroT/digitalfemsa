import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import PointsTransactionDetails from '../../components/PointsTransactionDetails';
import {mockProduct} from '../mocks/product.mock';

describe('PointsTransactionDetails', () => {
  test('01 - renders product details', () => {
    const {findByRole} = render(
      <PointsTransactionDetails product={mockProduct} onSubmit={() => {}} />,
    );
    const productPointsSection = findByRole('row');
    const productImage = findByRole('img');

    expect(productPointsSection).toBeDefined();
    expect(productImage).toBeDefined();
  });

  test('02 - calls onSubmit when submit button is pressed', () => {
    const handleSubmit = jest.fn();
    const {getByLabelText} = render(
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

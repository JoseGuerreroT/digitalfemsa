import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import TransactionItem from '../../components/TransactionItem';
import {mockProduct} from '../mocks/product';

describe('TransactionItem', () => {
  test('01 - renders the correct product name', () => {
    const {getByText, debug} = render(
      <TransactionItem product={mockProduct} onTransactionPress={() => {}} />,
    );
    debug();
    expect(getByText(mockProduct.product)).not.toBeNull();
  });

  test('02 - renders the correct points', () => {
    const {getByText} = render(
      <TransactionItem product={mockProduct} onTransactionPress={() => {}} />,
    );
    expect(getByText('100')).not.toBeNull();
  });

  test('03 - calls the onTransactionPress callback when pressed', () => {
    const mockCallback = jest.fn();
    const {getByLabelText} = render(
      <TransactionItem
        product={mockProduct}
        onTransactionPress={mockCallback}
      />,
    );
    fireEvent.press(getByLabelText('transaction-item'));
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(mockProduct);
  });
});

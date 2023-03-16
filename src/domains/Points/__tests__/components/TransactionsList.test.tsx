import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TransactionList from '../../components/TransactionsList';
import {mockProducts} from '../mocks/product.mock';

describe('<TransactionList />', () => {
  test('01 - renders correctly', () => {
    const {getByLabelText} = render(
      <TransactionList products={mockProducts} onTransactionPress={() => {}} />,
    );

    expect(getByLabelText('transaction-list')).toBeDefined();
  });

  test('02 - renders all products by default', () => {
    const {queryAllByLabelText} = render(
      <TransactionList products={mockProducts} onTransactionPress={() => {}} />,
    );

    const items = queryAllByLabelText(`transaction-item`, {exact: false});
    expect(items.length).toBe(mockProducts.length);
  });

  test('03 - renders only earned products when selected', () => {
    const {getByLabelText} = render(
      <TransactionList products={mockProducts} onTransactionPress={() => {}} />,
    );

    fireEvent.press(getByLabelText('earned-button'));
    const earnedItem = mockProducts.find(item => !item.is_redemption);
    const item = getByLabelText(`transaction-item-${earnedItem?.id}`);
    expect(item).toBeDefined();
  });

  it('04 - renders only redeemed products when selected', () => {
    const {getByLabelText} = render(
      <TransactionList products={mockProducts} onTransactionPress={() => {}} />,
    );

    fireEvent.press(getByLabelText('redeemed-button'));
    const redeemedItem = mockProducts.find(item => item.is_redemption);
    const item = getByLabelText(`transaction-item-${redeemedItem?.id}`);
    expect(item).toBeDefined();
  });

  test('05 - calls onTransactionPress when item is pressed', () => {
    const mockOnTransactionPress = jest.fn();

    const {getByLabelText} = render(
      <TransactionList
        products={mockProducts}
        onTransactionPress={mockOnTransactionPress}
      />,
    );
    const itemSelected = mockProducts[0];
    const item = getByLabelText(`transaction-item-${itemSelected.id}`);
    fireEvent.press(item);

    expect(mockOnTransactionPress).toHaveBeenCalledTimes(1);
    expect(mockOnTransactionPress).toHaveBeenCalledWith(itemSelected);
  });
});

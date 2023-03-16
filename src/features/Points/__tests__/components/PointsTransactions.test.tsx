import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import PointsTransactions from '../../components/PointsTransactions';
import {SWRConfig} from 'swr';

const onTransactionPress = jest.fn();

describe('PointsTransactions component', () => {
  test('01 - renders correctly', () => {
    const {toJSON} = render(
      <PointsTransactions onTransactionPress={onTransactionPress} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test('02 - shows activity indicator when loading', () => {
    const {getByLabelText} = render(
      <PointsTransactions onTransactionPress={onTransactionPress} />,
    );
    expect(getByLabelText('loading-products')).toBeDefined();
  });

  test('03 - shows error message if there is an error', async () => {
    const mockGetProducts = jest.fn().mockRejectedValueOnce('Error');
    const {getByText} = render(
      <PointsTransactions onTransactionPress={() => {}} />,
      {
        wrapper: ({children}) => (
          <SWRConfig value={{refreshInterval: 0}}>{children}</SWRConfig>
        ),
      },
    );
    await waitFor(() => expect(mockGetProducts).toHaveBeenCalled());
    expect(getByText('Error al cargar')).toBeDefined();
  });

  test('04 - shows user points', async () => {
    const mockProducts = [
      {id: 1, name: 'Product 1', price: 100, points: 100},
      {id: 2, name: 'Product 2', price: 200, points: 200},
    ];
    const {getByText} = render(
      <PointsTransactions onTransactionPress={() => {}} />,
      {
        wrapper: ({children}) => (
          <SWRConfig value={{refreshInterval: 0}}>{children}</SWRConfig>
        ),
      },
    );
    await waitFor(() => expect(mockGetProducts).toHaveBeenCalled());
    expect(getByText('300 puntos')).toBeDefined();
  });

  test('05 - shows user transactions', async () => {
    const mockProducts = [
      {id: 1, name: 'Product 1', price: 100, points: 100},
      {id: 2, name: 'Product 2', price: 200, points: 200},
    ];
    const {getByText} = render(
      <PointsTransactions onTransactionPress={() => {}} />,
      {
        wrapper: ({children}) => (
          <SWRConfig value={{refreshInterval: 0}}>{children}</SWRConfig>
        ),
      },
    );
    await waitFor(() => expect(mockGetProducts).toHaveBeenCalled());
    expect(getByText('Product 1')).toBeDefined();
    expect(getByText('Product 2')).toBeDefined();
  });

  test('06 - calls onTransactionPress when a transaction is pressed', async () => {
    const mockOnTransactionPress = jest.fn();
    const mockProducts = [
      {id: 1, name: 'Product 1', price: 100, points: 100},
      {id: 2, name: 'Product 2', price: 200, points: 200},
    ];
    const {getByText} = render(
      <PointsTransactions onTransactionPress={mockOnTransactionPress} />,
      {
        wrapper: ({children}) => (
          <SWRConfig value={{refreshInterval: 0}}>{children}</SWRConfig>
        ),
      },
    );
    await waitFor(() => expect(mockGetProducts).toHaveBeenCalled());
    fireEvent.press(getByText('Product 1'));
    expect(mockOnTransactionPress).toHaveBeenCalledWith(mockProducts[0]);
  });
});

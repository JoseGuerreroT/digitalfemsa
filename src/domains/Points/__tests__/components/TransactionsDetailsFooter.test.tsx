import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TransactionDetailsFooter from '../../components/TransactionsDetailsFooter';
import {
  getTextualDateFormat,
  getThousandFormat,
} from '../../utils/formatString';

describe('TransactionDetailsFooter', () => {
  const mockOnSubmit = jest.fn();
  const createdAt = '2022-01-01T00:00:00Z';
  const points = 1000;

  test('01 - renders correctly', () => {
    const {getByText} = render(
      <TransactionDetailsFooter
        onSubmit={mockOnSubmit}
        createdAt={createdAt}
        points={points}
      />,
    );

    expect(getByText('Detalles del producto:')).not.toBeNull();
    expect(
      getByText(`Comprado el ${getTextualDateFormat(createdAt)}`),
    ).not.toBeNull();
    expect(getByText('Con esta compra acumulaste:')).not.toBeNull();
    expect(getByText(`${getThousandFormat(points)} puntos`)).not.toBeNull();
    expect(getByText('Aceptar')).not.toBeNull();
  });

  it('calls onSubmit when the button is pressed', () => {
    const {getByLabelText} = render(
      <TransactionDetailsFooter
        onSubmit={mockOnSubmit}
        createdAt={createdAt}
        points={points}
      />,
    );

    fireEvent.press(getByLabelText('submit-button'));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';

import TransactionDetailHeader from '../../components/TransactionDetailsHeader';
describe('TransactionDetailHeader', () => {
  test('01 - renders correctly', () => {
    render(<TransactionDetailHeader name="Transaction Name" />);
  });

  test('02 - displays the transaction name', () => {
    const {getByText} = render(
      <TransactionDetailHeader name="Transaction Name" />,
    );
    expect(getByText('Transaction Name')).not.toBeNull();
  });
});

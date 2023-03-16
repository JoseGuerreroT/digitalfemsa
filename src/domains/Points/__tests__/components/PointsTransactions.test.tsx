import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
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
    const loadingIndicator = getByLabelText('loading-products');
    expect(loadingIndicator).toBeDefined();
  });
});

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import TransactionFooter from '../../components/TransactionFooter';

const setFilterSelected = jest.fn();

describe('TransactionFooter', () => {
  test('01 - renders correctly', () => {
    render(
      <TransactionFooter
        filterSelected="ALL"
        setFilterSelected={setFilterSelected}
      />,
    );
  });

  test('02 - calls setFilterSelected with "ALL" when "Todos" button is pressed', () => {
    const {getByLabelText, debug} = render(
      <TransactionFooter
        filterSelected="EARNED"
        setFilterSelected={setFilterSelected}
      />,
    );
    debug();
    const allButton = getByLabelText('all-button');
    fireEvent.press(allButton);
    expect(setFilterSelected).toHaveBeenCalledWith('ALL');
  });

  test('03 - calls setFilterSelected with "EARNED" when "Ganados" button is pressed', () => {
    const {getByLabelText} = render(
      <TransactionFooter
        filterSelected="ALL"
        setFilterSelected={setFilterSelected}
      />,
    );
    const earnedButton = getByLabelText('earned-button');
    fireEvent.press(earnedButton);
    expect(setFilterSelected).toHaveBeenCalledWith('EARNED');
  });

  test('04 - calls setFilterSelected with "REDEEMED" when "Canjeados" button is pressed', () => {
    const {getByLabelText} = render(
      <TransactionFooter
        filterSelected="ALL"
        setFilterSelected={setFilterSelected}
      />,
    );
    const redeemedButton = getByLabelText('redeemed-button');
    fireEvent.press(redeemedButton);
    expect(setFilterSelected).toHaveBeenCalledWith('REDEEMED');
  });
});

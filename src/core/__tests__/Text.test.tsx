import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '../Text';

describe('Text core component', () => {
  test('01 - renders text correctly', () => {
    const {getByText} = render(<Text>Test Text</Text>);
    const textElement = getByText('Test Text');
    expect(textElement).toBeDefined();
  });

  test('02 - applies custom font weight correctly', () => {
    const {getByText} = render(<Text weight="bold">Test Bold Text</Text>);
    const textElement = getByText('Test Bold Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining({fontWeight: 'bold'})]),
    );
  });

  test('03 - applies custom style correctly', () => {
    const customStyle = {fontSize: 20, color: 'red'};
    const {getByText} = render(<Text style={customStyle}>Test Text</Text>);
    const textElement = getByText('Test Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([expect.objectContaining(customStyle)]),
    );
  });
});

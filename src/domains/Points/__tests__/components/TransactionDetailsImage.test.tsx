import React from 'react';
import {render} from '@testing-library/react-native';

import TransactionDetailsImage from '../../components/TransactionDetailsImage';

describe('TransactionDetailsImage', () => {
  test('01 - renders correctly', () => {
    const {toJSON} = render(<TransactionDetailsImage />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('02 - displays the default image if no image is provided', () => {
    const DEFAULT_IMAGE =
      '../../../src/assets/images/placerholder-trasaction-item.png';

    const {getByLabelText} = render(<TransactionDetailsImage />);
    const image = getByLabelText('Transaction Image');
    expect(image.props.source.testUri).toBe(DEFAULT_IMAGE);
  });

  test('displays the provided image if an image URL is provided', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const {getByLabelText} = render(
      <TransactionDetailsImage image={imageUrl} />,
    );
    const image = getByLabelText('Transaction Image');
    expect(image.props.source.uri).toBe(imageUrl);
  });
});

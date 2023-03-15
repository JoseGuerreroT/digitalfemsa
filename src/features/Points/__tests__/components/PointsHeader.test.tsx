import React from 'react';
import {render} from '@testing-library/react-native';
import PointsHeader from '../../components/PointsHeader';

describe('PointsHeader', () => {
  test('01 - renders the title and subtitle', () => {
    const {getByText} = render(<PointsHeader />);
    const title = getByText('Bienvenido de vuelta!');
    const subtitle = getByText('Ruben Rodriguez');
    expect(title).toBeDefined();
    expect(subtitle).toBeDefined();
  });

  test('02 - styles the title and subtitle with the correct font size', () => {
    const {getByText} = render(<PointsHeader />);
    const title = getByText('Bienvenido de vuelta!');
    const subtitle = getByText('Ruben Rodriguez');
    expect(title.props.style).toContainEqual(
      expect.objectContaining({fontSize: 20}),
    );
    expect(subtitle.props.style).toContainEqual(
      expect.objectContaining({fontSize: 16}),
    );
  });
});

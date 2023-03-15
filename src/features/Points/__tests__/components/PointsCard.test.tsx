import React from 'react';
import {render} from '@testing-library/react-native';
import PointsCard from '../../components/PointsCard';

describe('PointsCard component', () => {
  test('01 - renders the component correctly', () => {
    const {toJSON} = render(<PointsCard points={1000} />);
    expect(toJSON()).toMatchSnapshot();
  });

  test('02 - displays the correct points value', () => {
    const {getByText, debug} = render(<PointsCard points={12000} />);
    debug();
    const pointsElement = getByText('12,000 pts');
    expect(pointsElement).toBeDefined();
  });
});

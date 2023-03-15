import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  const onPressMock = jest.fn();

  test('01 - renders correctly with default props', () => {
    const {getByText} = render(<Button title="Press me" />);
    const button = getByText('Press me');
    expect(button).toBeDefined();
  });

  test('02 - renders correctly with custom props', () => {
    const {getByText} = render(
      <Button title="Press me" onPress={onPressMock} size="small" />,
    );
    const button = getByText('Press me');
    expect(button).toBeDefined();
  });

  test('03 - calls onPress prop when pressed', () => {
    const {getByText} = render(
      <Button title="Press me" onPress={onPressMock} />,
    );
    const button = getByText('Press me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('04 - renders correctly with size="small"', () => {
    const {toJSON} = render(<Button title="Press me" size="small" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('05 - renders correctly with size="medium"', () => {
    const {toJSON} = render(<Button title="Press me" size="medium" />);
    expect(toJSON()).toMatchSnapshot();
  });
});

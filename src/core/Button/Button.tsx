import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {TouchableOpacityProps} from 'react-native';
import Text from '../Text';
type ButtonProps = TouchableOpacityProps & {
  title: string;
  onPress?: () => void;
  size?: 'small' | 'medium';
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  size = 'medium',
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={onPress}>
      <Text
        weight="bold"
        style={[styles.text, {fontSize: size === 'medium' ? 16 : 12}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 50,
    backgroundColor: '#334FFA',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});

export default Button;

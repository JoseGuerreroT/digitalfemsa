import React from 'react';
import {
  Text as TextRN,
  StyleSheet,
  TextStyle,
  TextProps as TextRNProps,
} from 'react-native';

type TextProps = TextRNProps & {
  weight?: TextStyle['fontWeight'];
  style?: TextStyle | TextStyle[];
};

const Text: React.FC<TextProps> = ({weight, style, ...restProps}) => {
  const fontWeight = weight ? {fontWeight: weight} : {};
  return (
    <TextRN style={[styles.text, style, fontWeight]} {...restProps}>
      {restProps.children}
    </TextRN>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
  },
});

export default Text;

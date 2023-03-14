import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ArrowIcon: React.FC = () => {
  return (
    <Svg viewBox="0 0 8 14" width={8} height={14}>
      <Path
        fill="currentColor"
        d="M7.707 6.293a1 1 0 0 0 0 1.414l-5 5a1 1 0 0 0 1.414 1.414 1 1 0 0 0 1.414 0L7.586 8l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 0-1.414z"
      />
    </Svg>
  );
};

export default ArrowIcon;

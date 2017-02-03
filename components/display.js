import Styles from './styles';
import React from 'react';
import { Text } from 'react-native';

const Display = ({value}) => (
  <Text style={Styles.display}>{value}</Text>
);

export default Display;
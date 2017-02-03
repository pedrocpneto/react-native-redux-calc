import Styles from './styles.js';
import React from 'react';
import { View } from 'react-native';
import Column from './column.js';

const Buttons = () => (
  <View style={Styles.keyboard} >
    <Column value={["7","4", "1", "0"]} />
    <Column value={["8","5", "2", "."]} />
    <Column value={["9","6", "3", "="]} />
    <Column value={["/","*", "-", "+"]} />
  </View>
);

export default Buttons;

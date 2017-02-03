
import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import Display from './display.js';
import Buttons from './buttons.js';
import Styles from './styles.js';

const Bestcalc = () => (
  <View style={Styles.container}>
    <StatusBar
      backgroundColor="cyan"
      barStyle="dark-content" />
    <Display value="42" />
    <Buttons />
  </View>
);

export default Bestcalc;
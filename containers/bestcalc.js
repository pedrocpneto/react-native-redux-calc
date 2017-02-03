
import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import DisplayValue from './display-value.js';
import Buttons from '../components/buttons.js';
import Styles from '../components/styles.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calc from '../reducers/calc.js';

const store = createStore(calc);

const Bestcalc = () => (
  <Provider store={store}>
    <View style={Styles.container}>
      <StatusBar
        backgroundColor="cyan"
        barStyle="dark-content" />
      <DisplayValue style={{flex: 1}} />
      <Buttons />
    </View>
  </Provider>
);

export default Bestcalc;
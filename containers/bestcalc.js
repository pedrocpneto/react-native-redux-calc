
import React from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import DisplayValue from './display-value';
import Buttons from '../components/buttons';
import Styles from '../components/styles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import calc from '../reducers';

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
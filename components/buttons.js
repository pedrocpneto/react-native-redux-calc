import Styles from './styles';
import React from 'react';
import { View } from 'react-native';
import ColumnContainer from '../containers/column-container';

const Buttons = () => (
  <View style={Styles.keyboard} >
    <ColumnContainer value={["7","4", "1", "0"]} />
    <ColumnContainer value={["8","5", "2", "."]} />
    <ColumnContainer value={["9","6", "3", "="]} />
    <ColumnContainer value={["CE","/","*", "-", "+"]} />
  </View>
);

export default Buttons;

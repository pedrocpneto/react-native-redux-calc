import Styles from './styles';
import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

const Column = ({value, onPress}) => (
  <View style={Styles.keyboardColumn}>
    {value.map(value => 
    <TouchableHighlight key={value} onPress={() => onPress(value)} style={{flex:1, alignItems: 'stretch'}} >
      <Text style={Styles.button}>
        {value}
      </Text>
    </TouchableHighlight>
    )}
  </View>
);

export default Column;
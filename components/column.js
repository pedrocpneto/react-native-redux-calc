import Styles from './styles.js';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Column = ({value, onPress}) => (
  <View style={Styles.keyboardColumn}>
    {value.map(value => 
    <TouchableOpacity key={value} onPress={() => onPress(value)} style={{flex:1, alignItems: 'stretch'}} >
      <Text style={Styles.button}>
        {value}
      </Text>
    </TouchableOpacity>
    )}
  </View>
);

export default Column;
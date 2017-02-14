// @flow

import {StyleSheet} from 'react-native';

// Esquema de cores
//https://coolors.co/4b0082-00ffff-171738-e8d7f1-dff3e4
//https://coolors.co/673ab7-00bcd4-311b92-e0f7fa-006064

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  display: {
    flex: 1,
    fontSize: 64,
    color:'#311b92',
    backgroundColor:'#00bcd4',
    elevation: 0
  },
  keyboard: {
    flex: 3,
    elevation: 3,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  keyboardColumn: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#673ab7',
    color: '#E0F7FA',
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 32
  }
});

export default Styles;
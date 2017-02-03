// @flow

import {StyleSheet} from 'react-native';

// Esquema de cores
//https://coolors.co/4b0082-00ffff-171738-e8d7f1-dff3e4

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
    color:'#171738',
    backgroundColor:'cyan',
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
    backgroundColor: 'indigo',
    color: '#dff3e4',
    textAlign: 'center',
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 32
  }
});

export default Styles;
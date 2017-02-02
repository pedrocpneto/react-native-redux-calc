
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

// Esquema de cores
//https://coolors.co/4b0082-00ffff-171738-e8d7f1-dff3e4

const styles = StyleSheet.create({
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
})

class Display extends Component {
  render() {
    return (
      <Text style={styles.display}>42</Text>
    )
  }
}

class Column extends Component {
  render() {
    var rows = [];
    for (var i=0; i < this.props.value.length; i++) {
        rows.push(
          <TouchableOpacity key={this.props.value[i]} onPress={() => {}} style={{flex:1, alignItems: 'stretch'}} >
            <Text style={styles.button}>
              {this.props.value[i]}
            </Text>
          </TouchableOpacity>
        )
    }
    return (
      <View style={styles.keyboardColumn}>
        {rows}
      </View>
    )
  }
}

class Buttons extends Component {
  render() {
    return (
      <View style={styles.keyboard} >
        <Column value={["7","4", "1", "0"]} />
        <Column value={["8","5", "2", "."]} />
        <Column value={["9","6", "3", "="]} />
        <Column value={["/","*", "-", "+"]} />
      </View>
    )
  }
}

export default class Bestcalc extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="cyan"
          barStyle="dark-content" />
        <Display />
        <Buttons />
      </View>
    );
  }
}

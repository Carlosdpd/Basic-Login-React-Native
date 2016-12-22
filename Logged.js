import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Navigator
} from 'react-native';

var BasicLogin = React.createClass({

    render() {
      return (
        <Navigator
            renderScene={this.renderScene}
            navigator={this.props.navigator}
             />
      );
  },

  renderScene: function() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
                Logged
            </Text>
            <Button style={styles.button} title="Go Back" onPress={this.onButtonPress}>
            </Button>
          </View>

        );
    },
    onButtonPress :function (){
      this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
      width: 100,

  }
});

module.exports = BasicLogin;

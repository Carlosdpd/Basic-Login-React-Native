
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

import LoginScene from './LoginScene.js';
import LoggedScene from './Logged.js';
import ErrorSecene from './Error.js';

var BasicLogin = React.createClass({

  render: function() {
      return(
          <Navigator
            initialRoute={{ title: 'LoginScene'}}
             renderScene={this.renderScene}
          />
      )
  },
    renderScene(route, navigator) {
      var routeTitle = route.title;
      if (routeTitle === 'LoginScene') {
        return (
          <LoginScene
            navigator={navigator} />
        );
      }
      if (routeTitle === 'LoggedScene') {
        return (
          <LoggedScene
            navigator={navigator} />
        );
      }
      if (routeTitle === 'ErrorScene') {
        return (
          <ErrorSecene
            navigator={navigator} />
        );
      }
  }


});

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
      width: 20
  }
});


AppRegistry.registerComponent('BasicLogin', () => BasicLogin);

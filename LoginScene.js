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

    getInitialState: function() {
        return {username: ''};
    },

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
              Welcome! Please log in!
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              ref= "username"
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              ref= "password"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry = {true}
            />
            <Button style={styles.button} title="Sign In" onPress={this.onButtonPress}>
            </Button>
          </View>

        );
    },
    onButtonPress :function (){
      var username=this.state.username;
      var password= this.state.password;
      fetch('http://link_to_service', { // USE THE LINK TO THE SERVER YOU'RE USING
              method: 'POST', // USE GET, POST, PUT,ETC
              headers: { //MODIFY HEADERS
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({"username":username, "password":password})
            })
            .then((response) => response.json()) //WORKING WITH THE RESPONSE
          .then((responseJson) => {
            if ( true //MAKE YOU VALIDATIONS HERE ) {
                this.props.navigator.push({title: 'LoggedScene'});
            }else{
                this.props.navigator.push({title: 'ErrorScene'});
            }
          })
          .catch((error) => {
            console.error(error);
          });
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

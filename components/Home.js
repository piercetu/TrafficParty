// Home Page

import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Home extends Component {
  // Hide the header bar section
  static navigationOptions = {
    header: null
  }

  logging = () => {
    console.log('Hi');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../resources/logo.png')} />
        <Text style={styles.h1}>Login to start partying</Text>
        <TouchableOpacity onPress={this.logging}>
          <Image style={styles.buttonFacebook} source={require('../resources/button-facebook.png')} />
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
  h1: {
    color: '#B300B3',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonFacebook: {
    height: 40,
    width: 300,
  },
});

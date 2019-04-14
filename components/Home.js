// Home.js
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, View } from 'react-native';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Hide the header bar section
  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('../resources/home.png')} style={styles.container}>
        <Text style={styles.h1}>Let’s Party</Text>

        {/* Host Button */}
        <TouchableOpacity style={styles.buttonWhite}
          onPress={() => navigate('Lobby')}
        >
          <Text style={styles.textWhite}>HOST</Text>
        </TouchableOpacity>

        {/* Join Button */}
        <TouchableOpacity style={styles.buttonPurple}>
          <Text style={styles.textPurple}>JOIN</Text>
        </TouchableOpacity>

      </ImageBackground>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  h1: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 140,
  },
  buttonWhite: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    justifyContent: 'center',
    width: '85%',
  },
  buttonPurple: {
    alignItems: 'center',
    backgroundColor: '#C239B3',
    height: 45,
    marginBottom: 10,
    marginTop: 20,
    justifyContent: 'center',
    width: '85%',
  },
  textWhite: {
    fontWeight: 'bold',
    color: '#C239B3',
  },
  textPurple: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

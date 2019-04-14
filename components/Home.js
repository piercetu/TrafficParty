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
        <Text>Let’s Party</Text>

        {/* Host Button */}
        <TouchableOpacity style={styles.buttonPurple}
          onPress={() => navigate('Lobby')}
        >
          <Text style={styles.buttonText}>HOST</Text>
        </TouchableOpacity>

        {/* Join Button */}
        <TouchableOpacity style={styles.buttonPurple}>
          <Text style={styles.buttonText}>JOIN</Text>
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
  buttonPurple: {
    alignItems: 'center',
    backgroundColor: '#C239B3',
    height: 45,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
    width: '85%',
  },
});

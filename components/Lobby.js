// Lobby Page
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, View } from 'react-native';

export default class Lobby extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Hide the header bar section
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ScrollView>
        <Text>Pick a noun...</Text>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/logo.png')} />
          <Text>Nhat</Text>
          <Text>Chair</Text>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/logo.png')} />
          <Text>Pierce</Text>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/logo.png')} />
          <Text>Leimmi</Text>
        </View>

      </ScrollView>
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
});

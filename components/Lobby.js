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
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text style={styles.h1} onPress={() => navigate('Final')}>Pick a noun...</Text>

        <View style={styles.blockMain}>
          <Image style={styles.logo} source={require('../resources/person3.png')} />
          <View style={styles.currentSubblock}>
            <Text style={styles.h2Main}>Nhat</Text>
            <Text style={styles.h3Main}>Chair</Text>
          </View>

        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person2.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Pierce</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person1.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Leimmi</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person4.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Anna</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person2.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Pierce</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person1.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Leimmi</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person4.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Anna</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person2.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Pierce</Text>
          </View>
        </View>

        <View style={styles.block}>
          <Image style={styles.logo} source={require('../resources/person1.png')} />
          <View style={styles.subblock}>
            <Text style={styles.h2}>Leimmi</Text>
          </View>
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
  h1: {
    textAlign: 'center',
    color: '#C239B3',
    fontWeight: 'bold',
    marginTop: 120,
    marginBottom: 50,
    fontSize: 30,
  },
  logo: {
    height: 80,
    width: 80,
  },
  block: {
    // borderWidth: 1,
    paddingRight: 16,
    paddingLeft: 32,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  blockMain: {
    backgroundColor: '#C239B3',
    borderRadius: 10,
    // borderWidth: 1,
    paddingRight: 16,
    paddingLeft: 16,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  currentSubblock: {
    marginLeft: '4%',
  },
  subblock: {
    marginLeft: '4%',
  },
  h2: {
    color: '#C239B3',
    fontWeight: 'bold',
    fontSize: 20,
  },
  h2Main: {
    color: '#FEB9C8',
    fontWeight: 'bold',
    fontSize: 20,
  },
  h3Main: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 26,
  },
});

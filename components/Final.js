// Lobby Page
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, ImageBackground, View } from 'react-native';

export default class Final extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  // Hide the header bar section
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 10000);
  }

  render() {
    const span = styles.span;

    if (this.state.redirect) {
      this.props.navigation.navigate('Home');
    }

    return (
      <ImageBackground source={require('../resources/final.png')} style={styles.container}>
        <Text style={styles.h1}>Scene from a hit sitcom</Text>

        <View style={styles.box}>
          <Text style={styles.p}>Amy enters through the front <Text style={span}>chair</Text>, flops onto the overstuffed <Text style={span}>monkey</Text>, and heaves a/an <Text style={span}>slimy</Text> sigh of exhaustion. Jenny comes out of the <Text style={span}>beanie</Text>.</Text>
        </View>

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
  },
  h1: {
    textAlign: 'center',
    color: '#C239B3',
    fontWeight: 'bold',
    marginTop: 120,
    marginBottom: 50,
    fontSize: 30,
    position: 'relative',
    bottom: 80,
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 10,

    marginTop: 0,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,

    paddingTop: 25,
    paddingBottom: 25,
    paddingRight: 15,
    paddingLeft: 15,

    position: 'relative',
    bottom: 80,
  },
  p: {
    fontSize: 28,
  },
  span: {
    fontWeight: 'bold',
    color: '#C239B3',
  },
});

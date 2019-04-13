// Login Page
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import { connect } from 'react-redux';

import { facebookLogin } from './Redux/actions/auth';

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      spinner: true,
      user: null
    };
  }
  // Hide the header bar section
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        spinner: !this.state.spinner
      });
    }, 3000);
  }
  
  handleFacebookLoginOnPress = () => {
    this.props.facebookLogin();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.user !== state.user) {
      return {
        user: props.user
      };
    }

    return null;
  }

  render() {
    if (this.state.user)
      this.props.navigation.navigate('Home')
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          animation={"slide"}
          overlayColor={"rgba(164, 41, 173, 1)"}
        />

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

const mapStateToProps = state => {
  return {
    user: state.auth.user 
  };
};

export default connect(mapStateToProps, { facebookLogin })(Login);
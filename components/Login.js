// Login Page
import React, { PureComponent } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
    const { navigate } = this.props.navigation;
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

        {/* Facebook Login Button */}
        <TouchableOpacity style={styles.buttonBlue} onPress={this.logging}>
          <Text style={styles.buttonText}>LOG IN WITH FACEBOOK</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="e.g. john.smith@gmail.com" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="e.g. Must be at least 6 characters" />

        {/* Sign in Button */}
        <TouchableOpacity style={styles.buttonPurple}
          onPress={() => navigate('Lobby')}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>

        {/* Create account Button */}
        <TouchableOpacity style={styles.buttonTeal}>
          <Text style={styles.buttonText}>CREATE AN ACCOUNT</Text>
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
    height: 120,
    width: 120,
  },
  h1: {
    color: '#B300B3',
    fontSize: 20,
    // fontWeight: '500',
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonFacebook: {
    height: 40,
    width: 300,
  },
  label: {
    fontWeight: '500',
    marginTop: 6,
    marginBottom: 6,
    textAlign: 'left',
    width: '85%',
  },
  input: {
    height: 45,
    width: '85%',
    textAlign: 'left',
    borderWidth: 1,
    borderColor: '#cfd0d1',
    paddingLeft: 8,
  },
  buttonBlue: {
    alignItems: 'center',
    backgroundColor: '#3c5a99',
    height: 45,
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'center',
    width: '85%',
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
  buttonTeal: {
    alignItems: 'center',
    backgroundColor: '#0d9aa2',
    height: 45,
    justifyContent: 'center',
    width: '85%',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
  },
});


const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps, { facebookLogin })(Login);
/**
 * ------------------------------------------------------ /
 * The main container for imports and navigation
 * Default page is xxxx.js
 * ------------------------------------------------------ /
 */

// Main Imports ----------------------------------------- /
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// Auth Screens Import ---------------------------------- /
import Lobby from './components/Lobby';
import Login from './components/Auth';
import Splash from './components/Splash';


// Navigation ------------------------------------------ /
const Nav = createAppContainer(
  createStackNavigator({
<<<<<<< HEAD
    Home: { screen: Home},
=======
    Login: { screen: Login },
>>>>>>> 0ff9692db17309a4070f1151546a5d9af229b470
  })
);

export default class App extends React.Component {
  render() {
    return (
      <Nav />
    );
  }
}

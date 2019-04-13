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
import Home from './components/Home';
import Lobby from './components/Lobby';
import Login from './components/Login';
import Splash from './components/Splash';


// Navigation ------------------------------------------ /
const Nav = createAppContainer(
  createStackNavigator({
    Home: { screen: Home},
  })
)

export default class App extends React.Component {
  render() {
    return (
      <Nav />
    );
  }
}

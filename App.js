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
    Login: { screen: Login },
  })
);

export default class App extends React.Component {
  render() {
    return (
      <Nav />
    );
  }
}

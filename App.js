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

// Redux Imports ----------------------------------------- /
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './components/Redux/configureStore';

// Auth Screens Import ---------------------------------- /
import Lobby from './components/Lobby';
import Login from './components/Login';
import Splash from './components/Splash';


// Navigation ------------------------------------------ /
const Nav = createAppContainer(
  createStackNavigator({
    Login: { screen: Login }
  })
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.configureStore = configureStore();
  }

  render() {
    return (
      <Provider store={this.configureStore.store}>
        <PersistGate loading={null} persistor={this.configureStore.persistor}>
          <Nav />
        </PersistGate>
      </Provider>
    );
  }
}

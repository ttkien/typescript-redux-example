/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as Authentication from 'demo-authentication'
import {store} from './src/store'
import {Provider, connect} from 'react-redux'
import { loadingResource } from './src/actions/loadingResource';
import ResourceLoader from './src/ containers/ResourceLoader';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createBottomTabNavigator(
   {
    resourceLoader: ResourceLoader,
    authentication: Authentication.App
  }
);

const AppContainer = createAppContainer(AppNavigator);


type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={store}>

<AppContainer/>
      {/* <View style={styles.container}>
      <Authentication.App 
      style={styles.authentication}
      onLoginSuccess={(profile: any) => {
        alert("login success" + profile)
      }}/>
      <ResourceLoader></ResourceLoader> */
      // </View>
    }
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    alignSelf: 'stretch',
    width:320
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  authentication: {
    alignSelf: 'stretch'
  }
});

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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={store}>

      <View style={styles.container}>
      <Authentication.App onLoginSuccess={(profile) => {
        alert("login success")
      }}/>
      <ResourceLoader></ResourceLoader>
      </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

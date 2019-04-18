
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import {store} from './store'
import HomeComponent from './containers/home';
import {IProfile, ActionType} from './types'
import StackNavigation from './stackNavigation'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export interface Props {
  onLoginSuccess: (profile?: IProfile) => void
  style?: any

}
export class App extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const {style, onLoginSuccess} = this.props;
    return (
      <Provider store={store}>
      <StackNavigation/>
      {/* <HomeComponent 
        style={style}
        onLoginSuccess={(profile) => {
          console.log("LOgin success"  + profile)
          onLoginSuccess(profile)
      }}/> */}
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
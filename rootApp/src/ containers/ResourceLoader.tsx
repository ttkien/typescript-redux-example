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
import {Provider, connect} from 'react-redux'
import { loadingResource } from '../actions//loadingResource';
import { ActionType, IResource } from '../types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
    type: ActionType | null
    resource: IResource | null
};
export class ResourceLoader extends Component<Props> {

  componentDidMount() {
    this.props.onClick()
}

render() {
    switch (this.props.type) {
        case ActionType.Default:
            return (<View style={{ top: 50 }}>
                <Text>Default</Text>
            </View>)
        case ActionType.Loading:
            return (<View style={{ top: 50 }}>
                <Text>Loading</Text>
            </View>)
        case ActionType.Success:

              // setTimeout(
                // ,2000)
            return (
                <View style={{ top: 50 }}>
                    <Text>{"Resource name " + this.props.resource}</Text>
                </View>
            )

        default:
            return (<View></View>)
    }
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


const mapStateToProps = (state, ownProps: Props) => ({
  type: state.loadingResourceReducer.type,
  resource: state.loadingResourceReducer.resource
})

function mapDispatchToProps(dispatch, ownProps: Props) {
  return {
      onClick: () => dispatch(loadingResource())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceLoader)
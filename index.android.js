/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import App from './src/App'

export default class instagrammable extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <App />
      </View>
    );
  }
}
AppRegistry.registerComponent('instagrammable', () => instagrammable);

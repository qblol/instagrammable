import React, { Component } from 'react';
import { View } from 'react-native'
import Headers from './components/Header'
import Footers from './components/Footer'
import Contents from './components/Contents'

export default class App extends Component {
  render() {
      return (
        <View>
          <Headers />
          <Contents />
          <Footers />
        </View>
      );
  }
}

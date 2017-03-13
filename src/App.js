import React, { Component } from 'react';
import { Navigator } from 'react-native'
import { Container } from 'native-base'
import Main from './components/Main'
import Cam from './components/Camera'
import Forms from './components/Form'

export default class App extends Component {
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator){
    switch (route.scene) {
      case 'main':
        return (
          <Main route={route} navigator={navigator} />
        )
      case 'camera':
        return (
          <Cam route={route} navigator={navigator} />
        )
      case 'form':
        return (
          <Forms route={route} navigator={navigator} />
        )
      default:
        return (
          <Text style={{flex:1,alignItems:'center',justifyContent:'center',fontSize:40}}>404</Text>
        )
    }
  }

  render() {
      return (
        <Navigator
          style={{width:'100%', height:'100%'}}
          initialRoute={{ scene: 'main'}}
          renderScene={this.renderScene} />
      )
  }
}

import React, { Component } from 'react';
import { Navigator } from 'react-native'
import { Container } from 'native-base'
import Headers from './Header'
import Footers from './Footer'
import Contents from './Content'
import Cam from './Camera'

export default class Main extends Component {
  constructor(props){
    super(props)
  }
  render() {
      return (
        <Container>
          <Headers />
          <Contents />
          <Footers x={this.props}/>
        </Container>
      );
  }
}

import React, { Component } from 'react';
import { Container } from 'native-base'
import Headers from './components/Header'
import Footers from './components/Footer'
import Contents from './components/Content'

export default class App extends Component {
  render() {
      return (
        <Container>
          <Headers />
          <Contents />
          <Footers />
        </Container>
      );
  }
}

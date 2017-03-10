import React, { Component } from 'react';
import { Header, Title, Body } from 'native-base';

export default class Headers extends Component {
  render() {
      return (
        <Header style={{backgroundColor:'teal'}}>
            <Body>
                <Title style={{color:'white'}}>Instagrammable</Title>
            </Body>
        </Header>
      );
  }
}

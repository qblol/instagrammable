import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class Headers extends Component {
  render() {
      return (
          <Container>
              <Header style={{backgroundColor:'teal'}}>
                  <Body>
                      <Title style={{color:'white'}}>Instagrammable</Title>
                  </Body>
              </Header>
          </Container>
      );
  }
}

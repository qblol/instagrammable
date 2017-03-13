import React, { Component } from 'react';
import { Container, H1, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import Headers from './Header'

export default class Forms extends Component {
  constructor(props){
    super(props)
  }
  render() {
      return (
          <Container>
              <Headers />
              <Content>
                <H1 style={{marginLeft:15, marginTop:10}}>Add New Cool Place</H1>
                  <Form>
                      <Item floatingLabel>
                          <Label>Place Name</Label>
                          <Input />
                      </Item>
                      <Item floatingLabel>
                          <Label>City</Label>
                          <Input />
                      </Item>
                      <Item floatingLabel last>
                          <Label>Description</Label>
                          <Input />
                      </Item>
                  </Form>
              </Content>
              <Button onPress={()=>this.props.navigator.push({scene: 'main'})} block success>
                  <Text>Submit</Text>
              </Button>
          </Container>
      )
  }
}

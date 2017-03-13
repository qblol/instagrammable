import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class Footers extends Component {
  constructor(props){
    super(props)
  }
    render() {
      console.log(this.props.x.navigator);
        return (
          <Footer>
              <FooterTab style={{backgroundColor:'#00bfa5'}}>
                  <Button>
                      <Icon name="image" style={{color:'white'}}/>
                  </Button>
                  <Button onPress={()=>this.props.x.navigator.push({
                    scene: 'camera'
                  })}>
                      <Icon name="camera" style={{color:'white'}}/>
                  </Button>
              </FooterTab>
          </Footer>
        );
    }
}

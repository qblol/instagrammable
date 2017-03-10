import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';

export default class Footers extends Component {
    render() {
        return (
          <Footer>
              <FooterTab style={{backgroundColor:'#00bfa5'}}>
                  <Button>
                      <Icon name="image" style={{color:'white'}}/>
                  </Button>
                  <Button>
                      <Icon name="camera" style={{color:'white'}}/>
                  </Button>
              </FooterTab>
          </Footer>
        );
    }
}

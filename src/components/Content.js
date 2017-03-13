import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Body, Thumbnail, Text, Button, Icon } from 'native-base';

const logo = {uri:'http://qcreativesolutions.com/wp-content/uploads/2015/07/q-logo-3-02.png'}
const photo = {uri:'https://cdns.klimg.com/fimela.com/resources/real/2015/10/12/17527/food-fighters-melawai.jpg'}
const item = [
    {
      title: "Food Fighters",
      place: "Bandung",
      likes: 8,
      desc: "Cool place for eat and hangout",
      photo: "https://cdns.klimg.com/fimela.com/resources/real/2015/10/12/17527/food-fighters-melawai.jpg"
    },
    {
      title: "Food Fighters",
      place: "Bandung",
      likes: 8,
      desc: "Cool place for eat and hangout",
      photo: "https://cdns.klimg.com/fimela.com/resources/real/2015/10/12/17527/food-fighters-melawai.jpg"
    }
  ]

export default class Contents extends Component {
    render() {
        return item.map(item => {
          return (
            <Container>
              <Content>
                <Card >
                  <CardItem>
                    <Left>
                      <Thumbnail small source={logo} />
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>Admin</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image source={item.photo} style={{height:200, width:'100%'}}/>
                  </CardItem>
                  <CardItem content>
                    <Text>{item.desc}</Text>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon name="heart" />
                        <Text style={{marginLeft:5}}>{item.likes} Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon name="pin" />
                        <Text style={{marginRight:25}}>{item.place}</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem>
                </Card>
              </Content>
            </Container>
          )
        }
      )
    }
}

import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";
import { Image, StyleSheet } from "react-native";

import duckSounds from "./services/sounds/ducks";

export default class Page extends Component {
  componentDidMount() {
    duckSounds.init();
  }

  componentWillUnmount() {
    duckSounds.destroy();
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {duckSounds.sounds.map(sound => {
            return (
              <Button key={sound.name} onPress={sound.play.bind(sound)}>
                <Text>{sound.name}</Text>
                {sound.image ? (
                  <Image source={sound.image} style={styles.ImageIconStyle} />
                ) : null}
              </Button>
            );
          })}
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  ImageIconStyle: {
    padding: 0,
    margin: 50,
    height: 50,
    width: 50,
    resizeMode: "stretch"
  }
});

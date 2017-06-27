/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, Text } from "react-native";
import { Button } from "native-base";

import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
`;

const StyledButton = styled(Button)`
    paddingTop: 50;
`;

export default class StyledNativeBase extends Component {
  render() {
    return (
      <Container>
        <StyledButton><Text>Hello</Text></StyledButton>
      </Container>
    );
  }
}

AppRegistry.registerComponent("StyledNativeBase", () => StyledNativeBase);

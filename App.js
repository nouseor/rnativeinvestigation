import React, { Component } from 'react';
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import Page from './src/Page';
import { StyleProvider } from 'native-base';

import getTheme from "./kitchen-sink/theme/components";
import variables from "./kitchen-sink/theme/variables/commonColor";

const AppNavigator = StackNavigator(
  {
    Page: { screen: Page },
  },
  {
    initialRouteName: "Page",
    headerMode: "none"
  }
);

export default class AnatomyExample extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <Root>
          <AppNavigator />
        </Root>
      </StyleProvider>
    );
  }
}

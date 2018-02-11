import React from 'react';
import { StyleProvider } from 'native-base';

import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

export default class ThemeProvider extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        {this.props.children}
      </StyleProvider>
    );
  }
}

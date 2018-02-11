import React from 'react';
import { Root } from "native-base";
import ThemeProvider from './components/ThemeProvider';
import Navigation from './components/Navigation';

export default class AnatomyExample extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Root>
          <Navigation />
        </Root>
      </ThemeProvider>
    );
  }
}

import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HomeContainer from './containers/HomeContainer';

import theme from './theme';
const muiTheme = getMuiTheme(theme);

class App extends Component {

  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <HomeContainer/>
        </MuiThemeProvider>
    );
  }
}

export default App;

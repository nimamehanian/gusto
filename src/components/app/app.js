import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyles from 'styles/global';
import uiTheme from 'styles/uiTheme';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

import AuthForm from 'components/authForm/authForm';

function App() {
  const theme = createMuiTheme(uiTheme);
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/auth" render={(props) => <AuthForm {...props} />} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default hot(App);

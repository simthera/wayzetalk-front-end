import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from 'styled-components';
import { store } from './utils/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { responsiveTheme } from './utils/responsiveTheme';
// Import CSS reset and Global Styles
import './fonts.css';
import { GlobalStyles } from './global-styles';

const createHistory = require('history').createBrowserHistory;
const history = createHistory();
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={responsiveTheme}>
      <Router history={history}>
        <GlobalStyles />
        <App />
      </Router>
    </ThemeProvider>
  </StoreProvider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

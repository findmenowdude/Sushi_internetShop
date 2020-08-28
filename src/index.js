import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss'
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';


ReactDOM.render(
  /* <React.StrictMode> */
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </BrowserRouter>,
  /*   </React.StrictMode> */ document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "assets/styles/common.css"
import { Provider } from "react-redux"
import store from "./store/store"
import "./mock/user"
import "./mock/search"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

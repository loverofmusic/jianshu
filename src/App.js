import React, { Component } from "react";
import { GlobalStyle } from "./style.js";
import { GlobalIcon } from "./statics/iconfont/iconfont.js";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIcon />
        <Header />
      </Provider>
    );
  }
}

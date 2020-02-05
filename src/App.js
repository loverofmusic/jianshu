import React, { Component } from "react";
import { GlobalStyle } from "./style.js";
import { GlobalIcon } from "./statics/iconfont/iconfont.js";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Login from './pages/login'

class App extends Component {
  render() {
    
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalIcon />
        <BrowserRouter>
          <Header />
          {/* <Route path="/" exact render={() => <Home></Home>}></Route> */}
          <Route path="/" exact component={Home}></Route>
          {/* <Route path="/detail/:id" exact render={() => <Detail></Detail>}></Route> */}
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/login" exact component={Login}></Route>

        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

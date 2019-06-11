import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyContainer from './MyContainer';
import FirstPage from './FirstPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    let styles = {
      width: "100%",
      textAlign: "center"

    }
    return (
        <BrowserRouter>
          <Switch >
          <Route path="/" component={FirstPage} exact />
          <Route path="/todo" component={MyContainer} />
          </Switch>
        </BrowserRouter>

    );
  }
}

export default App;

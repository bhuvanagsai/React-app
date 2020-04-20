import React, { Component } from "react";
import Header from "../CommonComponents/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from '../Pages/Home';
import Recipe from '../Pages/Recipe';

const AppWrapper = styled.div`
  min-width: auto;
  max-width: 100%;
`;
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Router>
          <Switch>
            <Route path="/Recipes" component = {Recipe}>
            </Route>
            <Route path="/" component = {Home}>
            </Route>
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;

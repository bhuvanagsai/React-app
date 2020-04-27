import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from '../Pages/Home';
import Recipe from '../Pages/Recipe';
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';

const AppWrapper = styled.div`
  min-width: auto;
  max-width: 100%;
`;
class App extends Component {
  
  render() {
    return (
      <AppWrapper>
        <Router>
          <Switch>
            
            <Route path="/SignUp" exact component = {SignUp}/>
            <Route path="/Recipes" exact component = {Recipe}/>
            <Route path="/Home" exact component = {Home}/>       
            <Route path="/" exact component = {Login}/>    
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;

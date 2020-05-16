import React, { Component } from "react";
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route ,Redirect } from "react-router-dom";
import styled from "styled-components";
import Login from '../Components/Login/Login';
import SignUp from '../Components/SignUp/SignUp';
import 'font-awesome/css/font-awesome.min.css';
import Routing from "../Routes/Routing";
import pageNotFound from '../Pages/404-Page/pageNotFound';
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
            <Route path="/" exact component = {Login}/> 
            <Route path = {["/Home", "/Recipes","/Shop", "/ProductPage"]} exact 
            render={() =>
              this.props.LoggedIn === 'true' ? (
                <Routing/>
              ) : (
                <Redirect to="/" />
              )
            }
            />
            <Route path =  "*" exact component = {pageNotFound}/>
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.isLoggedIn);
  return {
    
    LoggedIn: state.LoggedIn,
  };
};
export default connect(mapStateToProps)(App);

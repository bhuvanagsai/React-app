import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Recipe from '../Pages/Recipe';
import Shop from '../Pages/Shop';
import Product from '../Pages/ProductPage';
import 'font-awesome/css/font-awesome.min.css';
class Routing extends Component {
  render() {
    
    return (
        <Router>
          <Switch> 
                <Route  path = "/Home" exact component = {Home}/> 
                <Route path="/Recipes" exact component = {Recipe}/> 
                <Route  path = "/ProductPage" exact component = {Product}/>  
                <Route  path = "/Shop" exact component = {Shop}/> 
          </Switch>
        </Router>
    );
  }
}

export default Routing;

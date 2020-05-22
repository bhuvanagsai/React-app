import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Recipe from '../Pages/Recipe';
import Shop from '../Pages/Shop';
import Product from '../Pages/ProductPage';
import 'font-awesome/css/font-awesome.min.css';
import Header from '../CommonComponents/Header/Header';
import Footer from '../CommonComponents/Footer/Footer';
import SubmitRecipe from '../Pages/SubmitRecipe';
class Routing extends Component {
  render() {
    
    return (
      <React.Fragment>
        <Header/>
        <Router>
          <Switch> 
            <Route  path = "/Home" exact component = {Home}/> 
            <Route path="/Recipes" exact component = {Recipe}/> 
            <Route  path = "/ProductPage" exact component = {Product}/>  
            <Route  path = "/Shop" exact component = {Shop}/> 
            <Route  path = "/SubmitRecipe" exact component = {SubmitRecipe}/> 
          </Switch>
        </Router>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Routing;

import React, { Component } from 'react';
import logo from '../Assets/logo.jpg';
import './App.css';
import Header from '../Components/Header';
import BannerSlider from '../Components/BannerSlider';
import styled from 'styled-components';
import LatestRecipe from '../Components/LatestRecipe';


const AppWrapper = styled.div`
  min-width:auto;
  max-width:100%;
`
const LogoWrapper = styled.div`
  width: auto;
  img{
    padding-top:20px
  }
`
class App extends Component {
     
    render(){
      return (
        <AppWrapper>
          <header className="wrapper">
            <LogoWrapper>
              <img src={logo} alt="logo" />
            </LogoWrapper>
            <Header/>
          </header>
          <BannerSlider/>
          <LatestRecipe/>
      </AppWrapper>
      );
    }
}

export default App;


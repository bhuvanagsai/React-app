import React, { Component } from "react";
import logo from "../Assets/logo.jpg";
import "./App.css";
import Header from "../CommonComponents/Header";
import BannerSlider from "../CommonComponents/BannerSlider";
import LatestRecipe from "../Components/LatestRecipe";
import styled from "styled-components";

const AppWrapper = styled.div`
  min-width: auto;
  max-width: 100%;
`;
const LogoWrapper = styled.div`
  width: auto;
  img {
    padding-top: 20px;
  }
`;
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <header className="wrapper">
          <LogoWrapper>
            <img src={logo} alt="logo" />
          </LogoWrapper>
          <Header />
        </header>
        <BannerSlider />
        <LatestRecipe />
      </AppWrapper>
    );
  }
}

export default App;

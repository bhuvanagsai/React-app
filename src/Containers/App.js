import React, { Component } from 'react';
import logo from '../Assets/logo.jpg';
import './App.css';
import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import BannerSlider from '../Components/BannerSlider/BannerSlider';

class App extends Component {
     
    render(){
      return (
        <div className="App">
          <header className="App-header-container">
            <div className="App-logo">
              <img src={logo} alt="logo" />
            </div>
            <Header/>
          </header>
          <Banner/>
          <BannerSlider/>
      </div>
      );
    }
}

export default App;


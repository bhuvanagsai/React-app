import React, { Component } from "react";
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  width: auto;
  img {
    padding-top: 20px;
  }
`;
class Header extends Component {
  state = {
    headerItems: [
      { id: "0", nav: "Home", subLink: 0 },
      {
        id: "1",
        nav: "Demos",
        subLinks: ["Grid Homepage", "List Homepage", "Boxed Version"],
      },
      {
        id: "2",
        nav: "Recipes",
        subLinks: ["Browse Recipes", "Recipe Page #1", "Recipe Page #2"],
      },
      {
        id: "3",
        nav: "Pages",
        subLinks: ["Shortcodes", "Typography", "Contact"],
      },
      {
        id: "4",
        nav: "Shop",
        subLinks: ["Shop", "Product Page"],
      },

      { id: "4", nav: "Submit Recipe", subLink: 0 },
    ],
    hoverIn: 0,
  };
  DropdownHoverIn = (id) => {
    this.setState({ hoverIn: id });
  };
  DropdownHoverOut = (id) => {
    this.setState({ hoverIn: -1 });
  };
  render() {
    return (
      <header className="wrapper">
        <LogoWrapper>
          <img src={require('../../assets/logo.jpg')} alt="logo" />
        </LogoWrapper>
        <HeaderComponent
          HeaderDropdownContent={this.state.headerItems}
          hoverStatus={this.state.hoverIn}
          DropdownHoverEnter={this.DropdownHoverIn}
          DropdownHoverLeave={this.DropdownHoverOut}
        />
      </header>
      
    );
  }
}

export default Header;

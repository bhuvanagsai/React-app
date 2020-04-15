import React, { Component } from "react";
import {NavBar,HeaderNav} from '../CommonComponents/Styles';

class Header extends Component {
  state = {
    headerItems: [
      { id: 1, nav: "Home" },
      { id: 2, nav: "Demos" },
      { id: 3, nav: "Recipes" },
      { id: 4, nav: "Pages" },
      { id: 5, nav: "Shop" },
      { id: 6, nav: "Submit Recepie" },
    ],
  };
  render() {
    return (
      <HeaderNav>
        {this.state.headerItems.map((p, index) => (
          <NavBar key={p.id}>
            <a href={p.nav}>{p.nav}</a>
          </NavBar>
        ))}
      </HeaderNav>
    );
  }
}

export default Header;

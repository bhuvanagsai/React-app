import React, { Component } from "react";
// import {HeaderNav} from '../CommonComponents/Styles';
import HeaderDropdown from "../CommonComponents/HeaderDropDown";
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
    console.log(this.state.hoverIn);
  };
  DropdownHoverOut = (id) => {
    // console.log(this.state.hoverIn)
    this.setState({ hoverIn: -1 });
  };
  render() {
    return (
      <HeaderDropdown
        HeaderDropdownContent={this.state.headerItems}
        hoverStatus={this.state.hoverIn}
        DropdownHoverEnter={this.DropdownHoverIn}
        DropdownHoverLeave={this.DropdownHoverOut}
      />
    );
  }
}

export default Header;

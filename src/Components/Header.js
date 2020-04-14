import React, { Component } from "react";
import styled from "styled-components";

const NavBar = styled.li`
  font-weight: 600;
  font-size: 14px;
  border-bottom: 3px solid transparent;
  padding: 25px 20px;
  a {
    text-decoration: none;
    color: #707070;
    position: relative;
  }
  a:hover {
    color: #505050;
  }
  &:hover {
    border-bottom: 3px solid #8dc63f !important;
  }
`;
const HeaderNav = styled.ul`
  display: flex;
  margin: 0;
  width: 80%;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

class Header extends Component {
  state = {
    headerItems: [
      { id: 1, nav: "Home" },
      { id: 2, nav: "Demos" },
      { id: 3, nav: "Recipes" },
      { id: 4, nav: "Pages" },
      { id: 5, nav: "Shop" },
      { id: 6, nav: "Submit Recepie" },
    ]
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

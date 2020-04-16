import React from "react";
import { NavBar, HeaderNav, Dropdown } from "../CommonComponents/Styles";
const HeaderDropdown = (props) => {
  return (
    <HeaderNav>
      {props.HeaderDropdownContent.map((p, index) => {
        if (p.subLink === 0) {
          return (
            <NavBar>
              <a href={p.nav}>{p.nav}</a>
            </NavBar>
          );
        } else {
          return (
            <NavBar
              onMouseEnter={() => props.DropdownHoverEnter(index)}
              onMouseLeave={() => props.DropdownHoverLeave(index)}
            >
              <a href={p.nav}>{p.nav}</a>
              <i
                className="fa fa-caret-down"
                aria-hidden="true"
                style={{ color: "#c4c4c4", marginLeft: "5px" }}
              ></i>
              <Dropdown hover = {p.id === props.hoverStatus}>
                {p.subLinks.map((p) => {
                  return <li>{p}</li>;
                })}
              </Dropdown>
            </NavBar>
          );
        }
      })}
    </HeaderNav>
  );
};
export default HeaderDropdown;

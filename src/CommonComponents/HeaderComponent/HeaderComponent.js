import React from "react";
import {
  NavBar,
  HeaderNav,
  Dropdown,
  NavLink,
  NavigationLink,
} from "./Styles";
const HeaderComponent = (props) => {
  return (
    <HeaderNav>
      {props.HeaderDropdownContent.map((p, index) => {
        if (p.subLink === 0) {
          return (
            <NavBar key = {p.id}>
              <NavigationLink href={p.map}>{p.nav}</NavigationLink>
            </NavBar>
          );
        } else {
          return (
            <div key = {index+5}
              style={{ position: "relative" }}
              onMouseEnter={() => props.DropdownHoverEnter(index)}
              onMouseLeave={() => props.DropdownHoverLeave(index)}
            >
              <NavBar>
                <NavigationLink href={p.map}>{p.nav}</NavigationLink>
                <i
                  className="fa fa-caret-down"
                  aria-hidden="true"
                  style={{ color: "#c4c4c4", marginLeft: "5px" }}
                ></i>
              </NavBar>
              <Dropdown hover={p.id == props.hoverStatus}>
                {p.subLinks.map((p,index) => {
                  return (
                    <li key = {index+1}>
                      <NavLink href="">{p}</NavLink>
                    </li>
                  );
                })}
              </Dropdown>
            </div>
          );
        }
      })}
    </HeaderNav>
  );
};
export default HeaderComponent;

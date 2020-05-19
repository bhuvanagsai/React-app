import React, { useState } from "react";

import {
  ThemingContainer,
  SettingIcon,
  Theming,
  ThemeColor,
  ColorsContainer,
  ResetButton,
} from "./Style";

const colors = [
  {
    id: 0,
    color: "#8dc63f",
  },
  {
    id: 1,
    color: "#2db2ea",
  },
  {
    id: 2,
    color: "#fa5b0f",
  },
  {
    id: 3,
    color: "#495d7f",
  },
  {
    id: 4,
    color: "#ffb400",
  },
  {
    id: 5,
    color: "#fcab55",
  },
  {
    id: 6,
    color: "#bfa980",
  },
  {
    id: 7,
    color: "#917ae9",
  },
  {
    id: 8,
    color: "#74aea1",
  },
  {
    id: 9,
    color: "#d64391",
  },
  {
    id: 10,
    color: "#dd3737",
  },
  {
    id: 11,
    color: "#784e3d",
  },
  {
    id: 12,
    color: "#911938",
  },
  {
    id: 13,
    color: "#37b6bd",
  },
  {
    id: 14,
    color: "gray",
  },
  {
    id: 15,
    color: "#404040",
  },
];
const Themes = (props) => {
  const [toggle, setToggle] = useState("-210px");
  const toggleHandler = () => {
    if (toggle === "-210px") {
      setToggle("0px");
    } else {
      setToggle("-210px");
    }
  };
  return (
    <ThemingContainer toggleSetting={toggle}>
      <SettingIcon onClick={toggleHandler}>
        <h2>Style Switcher</h2>
        <i className="fa fa-cog" aria-hidden="true" title = "Theme setting icon"></i>
      </SettingIcon>
      <Theming>
        <h3>Predefined Colors</h3>
        <ColorsContainer>
          {colors.map((p) => (
            <ThemeColor
              active={p.id === props.activeState}
              key={p.id}
              Color={p.color}
              onClick={() => {
                props.themeColorSetting(p.color, p.id);
              }}
            ></ThemeColor>
          ))}
        </ColorsContainer>
        <ResetButton>Reset</ResetButton>
      </Theming>
    </ThemingContainer>
  );
};
export default Themes;

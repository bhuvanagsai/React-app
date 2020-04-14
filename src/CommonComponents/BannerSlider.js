import React, { Component } from "react";
import styled from "styled-components";
import Banner from "./Banner";

const SliderNavBar = styled.div`
  width: 209px;
  height: auto;
  border-left: 1px solid #e3e3e3;
  padding: 16px 15px;
  font-size: 14px;
  font-weight: 650;
  color: gray;
  background: #f2f2f2;
  &:hover {
    background: #8dc63f;
    color: #fff;
  }
`;
const SliderContent = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
class BannerSlider extends Component {
  state = {
    Recipe: [
      { id: 0, recipe: "Mexican Grilled", with: "Corn Recipe" },
      { id: 1, recipe: "Roast Chicken", with: "With Lemon Gravy" },
      { id: 2, recipe: "Avocado Melon Salad", with: " With Lime Vinaigrette" },
      { id: 3, recipe: "Chunky Beef Stew", with: "" },
      // {recipe :"Farmhouse Vegetable",with: " And Barley Soup"}
    ],
    slider_contents: [
      {
        id: 0,
        slider_img: require("../Assets/sliderA_01.jpg"),
        type: "BAKING",
        recipe: "Mexican Grilled Corn Recipe",
        servings: 4,
        prepTime: "30 mins",
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 1,
        slider_img: require("../Assets/sliderA_02.jpg"),
        type: "CURRY",
        recipe: "Roast Chicken With Lemon Gravy",
        servings: 4,
        prepTime: "1 Hr 30 mins",
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 2,
        slider_img: require("../Assets/sliderA_03.jpg"),
        type: "SALADS",
        recipe: "Avocado Melon Salad With Lime Vinaigrette",
        servings: 2,
        prepTime: "15 mins",
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 3,
        slider_img: require("../Assets/sliderA_04.jpg"),
        type: "BEEF",
        recipe: "Chunky Beef Stew",
        servings: 1,
        prepTime: "2 Hr 30 mins",
        preparedBy: "BY SANDRA FORTIN",
      },
    ],
    activeBanner: 0,
  };
  switchHandler = (id) => {
    this.setState({ activeBanner: id });
  };
  render() {
    return (
      <div>
        <Banner content={this.state.slider_contents[this.state.activeBanner]} />
        <div className="wrapper">
          {this.state.Recipe.map((p, index) => (
            <SliderNavBar
              key={p.id}
              onClick={() => {
                this.switchHandler(index);
              }}
            >
              <SliderContent>
                <div>
                  {p.recipe}
                  <br></br>
                  {p.with}
                </div>
              </SliderContent>
            </SliderNavBar>
          ))}
        </div>
      </div>
    );
  }
}
export default BannerSlider;

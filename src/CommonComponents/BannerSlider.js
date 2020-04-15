import React, { Component } from "react";
import { SliderNavBar, SliderContent } from "../CommonComponents/Styles";
import Banner from "./Banner";

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
              active={p.id === this.state.activeBanner}
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

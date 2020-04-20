import React, { Component } from "react";
import { SliderNavBar, SliderContent } from '../BannerSlider/Styles';
import Banner from '../Banner/Banner';
// import RecipePage from "../../Components/RecipePage";

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
        slider_img: require("../../assets/sliderA_01.jpg"),
        type: "BAKING",
        recipe: "Mexican Grilled Corn Recipe",
        servings: 4,
        prepTime: "30 mins",
        cooking :"",
        preparedBy: "BY SANDRA FORTIN",
        calories:"632 Kcal"
      },
      {
        id: 1,
        slider_img: require("../../assets/sliderA_02.jpg"),
        type: "CURRY",
        recipe: "Roast Chicken With Lemon Gravy",
        servings: 4,
        prepTime: " 30 mins",
        cooking:"1 Hr",
        preparedBy: "BY SANDRA FORTIN",
        calories:"632 Kcal"
      },
      {
        id: 2,
        slider_img: require("../../assets/sliderA_03.jpg"),
        type: "SALADS",
        recipe: "Avocado Melon Salad With Lime Vinaigrette",
        servings: 2,
        prepTime: "15 mins",
        cooking:"",
        preparedBy: "BY SANDRA FORTIN",

      },
      {
        id: 3,
        slider_img: require("../../assets/sliderA_04.jpg"),
        type: "BEEF",
        recipe: "Chunky Beef Stew",
        servings: 1,
        prepTime: "30 mins",
        cooking: "2 Hr",
        preparedBy: "BY SANDRA FORTIN",
        calories:"632 Kcal"
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
        {/* <RecipePage R = {this.state.activeBanner} /> */}
      </div>
    );
  }
}
export default BannerSlider;

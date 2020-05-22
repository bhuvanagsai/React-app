import React, { Component } from "react";
import { SliderNavBar, SliderContent } from "../BannerSlider/Styles";
import Banner from "../Banner/Banner";
import { withRouter } from "react-router-dom";
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
        RecipeImage: require("../../assets/sliderA_01.jpg"),
        type: "BAKING",
        RecipeName: "Mexican Grilled Corn Recipe",
        servings: "4 people",
        prepTime: "30 mins",
        cooking: "15 mins",
        Rating: 5,
        preparedBy: "BY SANDRA FORTIN",
        calories: "632 Kcal",
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          {value :"In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done."},
          {value :"In the fat remaining in the pot, cook the onions until softened, about 5 minutes."},
          {value :"Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste."},
          {value :"Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender."}
        ],
      },
      {
        id: 1,
        RecipeImage: require("../../assets/sliderA_02.jpg"),
        type: "CURRY",
        RecipeName: "Roast Chicken With Lemon Gravy",
        servings: "4 people",
        prepTime: " 30 mins",
        cooking: "1 Hr",
        Rating: 3,
        preparedBy: "BY SANDRA FORTIN",
        calories: "632 Kcal",
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          {value :"In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done."},
          {value :"In the fat remaining in the pot, cook the onions until softened, about 5 minutes."},
          {value :"Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste."},
          {value :"Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender."}
        ],
      },
      {
        id: 2,
        RecipeImage: require("../../assets/sliderA_03.jpg"),
        type: "SALADS",
        RecipeName: "Avocado Melon Salad With Lime Vinaigrette",
        servings: "2 people",
        prepTime: "15 mins",
        Rating: 5,
        cooking: "15 mins",
        preparedBy: "BY SANDRA FORTIN",
        calories: "632 Kcal",
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          {value :"In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done."},
          {value :"In the fat remaining in the pot, cook the onions until softened, about 5 minutes."},
          {value :"Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste."},
          {value :"Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender."}
        ],
      },
      {
        id: 3,
        RecipeImage: require("../../assets/sliderA_04.jpg"),
        type: "BEEF",
        RecipeName: "Chunky Beef Stew",
        servings:"1 people",
        prepTime: "30 mins",
        cooking: "2 Hr",
        Rating: 5,
        preparedBy: "BY SANDRA FORTIN",
        calories: "632 Kcal",
        ingredients: [
          "2 pounds cubed beef stew meat",
          "3 tablespoons vegetable oil",
          "4 cubes beef bouillon, crumbled",
          "1 large onion, chopped",
          "1 teaspoon dried rosemary",
          "1/2 teaspoon ground black pepper",
          "3 large potatoes, peeled and cubed",
          "4 carrots, cut into 1 inch pieces",
          "4 stalks celery, cut into 1 inch pieces",
        ],
        directions: [
          {value :"In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done."},
          {value :"In the fat remaining in the pot, cook the onions until softened, about 5 minutes."},
          {value :"Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste."},
          {value :"Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender."}
        ],
      },
    ],
    activeBanner: 0,
  };
  switchHandler = (id) => {
    this.setState({ activeBanner: id });
  };
  ViewbuttonHandler = (content) => {
    this.props.history.push({
      pathname: "Recipes",
      state: {
        RecipeData: content,
      },
    });
  };
  render() {
    return (
      <div>
        <Banner
          content={this.state.slider_contents[this.state.activeBanner]}
          buttonHandler={this.ViewbuttonHandler}
        />
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
export default withRouter(BannerSlider);

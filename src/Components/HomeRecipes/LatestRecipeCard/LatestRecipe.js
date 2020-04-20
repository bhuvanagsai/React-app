import React, { Component } from "react";
import {
  HeadLine,
  RecipeLatestWrapper,
  HeaderContainer,
  CenterLine,
} from "./Styles";

import Search from "../../../CommonComponents/Search/Search";
import ViewType from "../ViewType";
import RecipeCard from "../RecipeCard/RecipeCards";
import { withRouter } from "react-router-dom";
class LatestRecipe extends Component {
  state = {
    LatestRecipeContent: [
      {
        id: 0,
        RecipeImage: require("../../../assets/recipeThumb-01.jpg"),
        RecipeName: "Mexican Grilled Corn Recipe",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo",
        prepTime: " 30 min",
        cooking:"20 min",
        Rating: 5,
        servings: 4,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        id: 1,
        RecipeImage: require("../../../assets/recipeThumb-02.jpg"),
        RecipeName: "Choclate Cake With Green Tea Cream",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        prepTime: " 30 min",
        cooking:"1 Hr ",
        Rating: 3,
        servings: 4,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        id: 2,
        RecipeImage: require("../../../assets/recipeThumb-03.jpg"),
        RecipeName: "Thai Yellow Curry Chicken",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        prepTime: " 45 min",
        cooking : " 20 min",
        Rating: 5,
        servings: 2,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        id: 3,
        RecipeImage: require("../../../assets/recipeThumb-04.jpg"),
        RecipeName: "Avocado melon salad with lime vinaigrette",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        prepTime: " 15 min",
        cooking:" 20 min",
        Rating: 4,
        servings: 1,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        id: 4,
        RecipeImage: require("../../../assets/recipeThumb-05.jpg"),
        RecipeName: "Sweet Chilli and Lime Chicken Wings",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        prepTime: " 45 min",
        cooking:" 20 min",
        Rating: 5,
        servings: 2,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        id: 5,
        RecipeImage: require("../../../assets/recipeThumb-06.jpg"),
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        RecipeName: "Pollo borracho with homemade tortillas",
        prepTime: " 30 min",
        Rating: 4,
        servings: 4,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        id: 6,
        RecipeImage: require("../../../assets/recipeThumb-07.jpg"),
        RecipeName: "Roast Chicken With Lemon Gravy",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        prepTime: " 20 min",
        cooking:"1 Hr ",
        Rating: 5,
        servings: 2,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        id: 7,
        RecipeImage: require("../../../assets/recipeThumb-09.jpg"),
        RecipeName: "Chunky Beef Stew",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        prepTime: " 2 hr 30 min",
        cooking:"2 Hr",
        Rating: 5,
        servings: 3,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
      {
        id: 8,
        RecipeImage: require("../../../assets/recipeThumb-08.jpg"),
        RecipeName: "Farmhouse Vegetable And Barley Soup",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        prepTime: "  1 hr 30 min",
        cooking:"1 Hr",
        Rating: 4,
        servings: 4,
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
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes.",
          "Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.",
          "Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.",
        ],
      },
    ],
    Ratings: [null, null, null, null, null],
    Is_list: 0,
    view: 1,
    hover: -1,
    details: null,
  };
  ViewHandler = () => {
    let listView = this.state.Is_list;
    let GridView = !this.state.Is_list;
    this.setState({ Is_list: !listView });
    if (listView || GridView) {
      this.setState({ view: !GridView });
    }
  };
  MouseEnterHandler = (id) => {
    this.setState({ hover: id });
  };
  MouseLeaveHandler = (id) => {
    this.setState({ hover: "090" });
  };
  buttonHandler = (content) => {
    this.props.history.push({
      pathname: "Recipes",
      state: content,
    });
    // this.props.history.push({
    //   pathname: 'Recipes',
    //   state : content
    // });
    // this.props.history.push(content);
    // console.log(this.props.history.location);
  };
  render() {
    return (
      <div className="wrapper wrapper-margin">
        <RecipeLatestWrapper>
          <HeaderContainer>
            <HeadLine>Latest Recipes</HeadLine>
            <CenterLine></CenterLine>
          </HeaderContainer>
          <ViewType
            is_List={this.ViewHandler}
            viewStatus={this.state.view}
          ></ViewType>
          <RecipeCard
            cardDetails={this.state.LatestRecipeContent}
            viewStatus={this.state.view}
            hover={this.state.hover}
            Ratings={this.state.Ratings}
            HoverImageIn={this.MouseEnterHandler}
            HoverImageOut={this.MouseLeaveHandler}
            buttonHandler={this.buttonHandler}
          />
        </RecipeLatestWrapper>
        <Search />
      </div>
    );
  }
}
export default withRouter(LatestRecipe);

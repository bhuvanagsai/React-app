import React, { Component } from "react";
import {
  HeadLine,
  RecipeLatestWrapper,
  HeaderContainer,
  CenterLine,
} from './Styles';

import Search from "../../../CommonComponents/Search/Search";
import ViewType from "../ViewType";
import RecipeCard from "../RecipeCard/RecipeCards";
import { withRouter } from 'react-router-dom';
class LatestRecipe extends Component {
  state = {
    LatestRecipeContent: [
      {
        id: 0,
        RecipeImage: require("../../../assets/recipeThumb-01.jpg"),
        RecipeName: "Mexican Grilled Corn Recipe",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo",
        perpTime: " 30 MIN",
        Rating: 5,
        servings: 4,
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 1,
        RecipeImage: require('../../../assets/recipeThumb-02.jpg'),
        RecipeName: "Choclate Cake With Green Tea Cream",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        perpTime: " 1 hr 30 min",
        Rating: 3,
        servings: 4,
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 2,
        RecipeImage: require("../../../assets/recipeThumb-03.jpg"),
        RecipeName: "Thai Yellow Curry Chicken",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        perpTime: " 45 min",
        Rating: 5,
        servings: 2,
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 3,
        RecipeImage: require("../../../assets/recipeThumb-04.jpg"),
        RecipeName: "avocado melon salad with lime vinaigrette",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        perpTime: " 15 min",
        Rating: 4,
        servings: 1,
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 4,
        RecipeImage: require("../../../assets/recipeThumb-05.jpg"),
        RecipeName: "Sweet Chilli and Lime Chicken Wings",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        perpTime: "   45 min",
        Rating: 5,
        servings: 2,
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 5,
        RecipeImage: require("../../../assets/recipeThumb-06.jpg"),
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        RecipeName: "pollo borracho with homemade tortillas",
        perpTime: " 30 min",
        Rating: 4,
        servings: 4,
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 6,
        RecipeImage: require("../../../assets/recipeThumb-07.jpg"),
        RecipeName: "Roast Chicken With Lemon Gravy",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        perpTime: " 1 hr 20 min",
        Rating: 5,
        servings: 2,
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 7,
        RecipeImage: require("../../../assets/recipeThumb-09.jpg"),
        RecipeName: "Chunky Beef Stew",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        perpTime: " 2 hr 30 min",
        Rating: 5,
        servings: 3,
        preparedBy: "BY SANDRA FORTIN",
      },
      {
        id: 8,
        RecipeImage: require("../../../assets/recipeThumb-08.jpg"),
        RecipeName: "Farmhouse Vegetable And Barley Soup",
        Description:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        perpTime: "  1 hr 30 min",
        Rating: 4,
        servings: 4,
        preparedBy: "BY SANDRA FORTIN",
      },
    ],
    Ratings: [null, null, null, null, null],
    Is_list: 0,
    view: 1,
    hover: -1,
    details: null
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
  buttonHandler = (content) =>{
    this.props.history.push({
      pathname: 'Recipe',
      state : content
    });
    // this.props.history.push(content);
    // console.log(this.props.history.location)
  }
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
            HoverImageIn = {this.MouseEnterHandler}
            HoverImageOut = {this.MouseLeaveHandler}
            buttonHandler = {this.buttonHandler}
          />
        </RecipeLatestWrapper>
        <Search />
      </div>
    );
  }
}
export default withRouter(LatestRecipe);

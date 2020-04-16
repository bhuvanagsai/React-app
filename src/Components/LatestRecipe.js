import React, { Component } from "react";
import {
  HeadLine,
  RecipeLatestWrapper,
  ViewGrid,
  Description,
  ViewTypeContainer,
  Line,
  HeaderContainer,
  RatingContainer,
  RecipeTime,
  CenterLine,
  RecipeCardsContainer,
  RecipeCards,
  ImageContainer,
  RecipeDetails,
  RecipeName,
  ListRecipeAlignment,
  ListRecipeContainer,
  ImageOverlay,
  ViewButton,
} from "../Components/Styles";

import Search from "./Search";
import StarRating from "./StarRating";

class LatestRecipe extends Component {
  state = {
    LatestRecipeContent: [
      {
        id: 0,
        RecipeImage: require("../Assets/recipeThumb-01.jpg"),
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
        RecipeImage: require("../Assets/recipeThumb-02.jpg"),
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
        RecipeImage: require("../Assets/recipeThumb-03.jpg"),
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
        RecipeImage: require("../Assets/recipeThumb-04.jpg"),
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
        RecipeImage: require("../Assets/recipeThumb-05.jpg"),
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
        RecipeImage: require("../Assets/recipeThumb-06.jpg"),
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
        RecipeImage: require("../Assets/recipeThumb-07.jpg"),
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
        RecipeImage: require("../Assets/recipeThumb-08.jpg"),
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
        RecipeImage: require("../Assets/recipeThumb-09.jpg"),
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
    
    this.setState({ hover : id });
  };
  MouseLeaveHandler = (id) => {
    this.setState({hover:"090"})
    
  };
  render() {
    return (
      <div className="wrapper wrapper-margin">
        <RecipeLatestWrapper>
          <HeaderContainer>
            <HeadLine>Latest Recipes</HeadLine>
            <CenterLine></CenterLine>
          </HeaderContainer>
          <ViewTypeContainer>
            <ViewGrid view={!this.state.Is_list} onClick={this.ViewHandler}>
              Grid
            </ViewGrid>
            <ViewGrid view={this.state.Is_list} onClick={this.ViewHandler}>
              List
            </ViewGrid>
          </ViewTypeContainer>

          <RecipeCardsContainer>
            {this.state.LatestRecipeContent.map((p) => (
              <RecipeCards key={p.id} view={this.state.view}>
                <ImageContainer src={p.RecipeImage}
                  onMouseEnter = {() => {this.MouseEnterHandler(p.id)}}
                  onMouseOut= {() => {this.MouseLeaveHandler(p.id)}}
                  view={this.state.view}
                ></ImageContainer>
                <ImageOverlay 
                  view={this.state.view}
                  hover={p.id === this.state.hover}
                ></ImageOverlay>
                <ViewButton view={this.state.view} hover = {p.id === this.state.hover}>
                  <a href="#View Recipe">View recipe</a>
                </ViewButton>
                <RecipeDetails view={this.state.view}>
                  <RecipeName view={this.state.view}>{p.RecipeName}</RecipeName>
                  <Description view={this.state.view}>
                    {p.Description}
                  </Description>
                  <Line></Line>
                  <RatingContainer>
                    {this.state.Ratings.map((_, index) => {
                      return (
                        <StarRating
                          color={index < p.Rating ? "#ffc741" : "#e0e0e0"}
                        />
                      );
                    })}
                    <ListRecipeContainer>
                      <ListRecipeAlignment view={this.state.view}>
                        <i className="fa fa-user" aria-hidden="true"></i>
                        {p.preparedBy}
                      </ListRecipeAlignment>
                      <ListRecipeAlignment view={this.state.view}>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        {p.perpTime}
                      </ListRecipeAlignment>
                      <ListRecipeAlignment view={this.state.view}>
                        <i className="fa fa-cutlery" aria-hidden="true"></i>
                        {p.servings} servings
                      </ListRecipeAlignment>
                    </ListRecipeContainer>
                  </RatingContainer>
                  <RecipeTime view={this.state.view}>
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    {p.perpTime}
                  </RecipeTime>
                </RecipeDetails>
              </RecipeCards>
            ))}
          </RecipeCardsContainer>
        </RecipeLatestWrapper>
        <Search/>
      </div>
    );
  }
}
export default LatestRecipe;

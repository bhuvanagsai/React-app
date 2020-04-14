import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import styled from "styled-components";

const HeadLine = styled.div`
  font-size: 22px;
  background-color: #fff;
  padding-right: 10px;
  color: #606060;
  font-weight: 500;
  line-height: 34px;
  font-family: open sans, helveticaneue;
`;
const RecipeLatestWrapper = styled.div`
  width: 73%;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
const CenterLine = styled.div`
  width: 75%;
  height: 1px;
  background: #ebebeb;
  margin-top: 5px;
`;
const RecipeCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const RecipeCards = styled.div`
  width: ${(props) => (props.view ? "calc((100% / 3) - 20px)" : "100%")};
  margin: 10px;
  background: #f8f8f8;
  display: ${(props) => (props.view ? "block" : "flex")};
`;
const ImageContainer = styled.img`
  width: ${(props) => (props.view ? "100%" : "35%")};
  height: ${(props) => (props.view ? "200px" : "100%")};
`;
const RecipeDetails = styled.div`
  width: ${(props) => (props.view ? "auto" : "100%")};
  height: auto;
  padding: 20px;
`;
const RecipeName = styled.div`
  text-align: left;
  color: #606060;
  line-height: 26px;
  font-family: "Arvo";
  font-size: 19px;
  display: block;
  display: -webkit-box;
  height: ${(props) => (props.view ? "78px" : "auto")};
  margin: 0 auto;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${(props) => (props.view ? "0px" : "10px")};
`;
const RatingContainer = styled.div`
  margin-top: 10px;
`;
const RecipeTime = styled.div`
  color: #909090;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: end;
  display: ${(props) => (props.view ? "block" : "none")};
`;
const Line = styled.hr`
  color: #e0e0e0;
  opacity: 0.2;
`;
const View = styled.div`
  background: #8dc63f;
  display: flex;
  float: right;
  color: white;
  border-radius: 26px;
  padding: 5px;
  width: 10%;
`;
const ViewGrid = styled.div`
  padding: 0px 5px;
  background: ${(props) => (props.view ? "#ffffff" : "#8dc63f")};
  color: ${(props) => (props.view ? "#8dc63f" : "#ffffff")};
  border-radius: ${(props) => (props.view ? "10px" : "0px")};
  width: 45%;
  text-align: center;
  font-size: 14px;
  font-weight: 650;
  cursor: pointer;
`;
const Description = styled.p`
  display: ${(props) => (props.view ? "none" : "block")};
  color: gray;
  font-size: 14px;
`;
const ListRecipeAlignment = styled.div`
  float: right;
  margin-right: 10px;
  color: #909090;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: end;
  margin-top: 5px;
  display: ${(props) => (props.view ? "none" : "block")};
  i {
    margin-right: 5px;
  }
`;
const ListRecipeContainer = styled.div`
  float: right;
  width: 70%;
`;
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
        StarRating: 5,
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
        StarRating: 3,
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
        StarRating: 5,
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
        StarRating: 4,
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
        StarRating: 5,
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
        StarRating: 4,
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
        StarRating: 5,
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
        StarRating: 5,
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
        StarRating: 4,
        servings: 4,
        preparedBy: "BY SANDRA FORTIN",
      },
    ],
    list: false,
    grid: true,
    view: true,
  };
  ViewHandler = () => {
    let listView = this.state.list;
    let GridView = this.state.grid;
    this.setState({ list: !listView });
    this.setState({ grid: !GridView });
    if (listView || GridView) {
      this.setState({ view: !GridView });
    }
  };
  render() {
    return (
      <div className="wrapper wrapper-margin">
        <RecipeLatestWrapper>
          <HeaderContainer>
            <HeadLine>Latest Recipes</HeadLine>
            <CenterLine></CenterLine>
          </HeaderContainer>
          <View>
            <ViewGrid view={this.state.grid} onClick={this.ViewHandler}>
              Grid
            </ViewGrid>
            <ViewGrid view={this.state.list} onClick={this.ViewHandler}>
              List
            </ViewGrid>
          </View>

          <RecipeCardsContainer>
            {this.state.LatestRecipeContent.map((p) => (
              <RecipeCards key={p.id} view={this.state.view}>
                <ImageContainer
                  src={p.RecipeImage}
                  view={this.state.view}
                ></ImageContainer>
                <RecipeDetails view={this.state.view}>
                  <RecipeName view={this.state.view}>{p.RecipeName}</RecipeName>
                  <Description view={this.state.view}>
                    {p.Description}
                  </Description>
                  <Line></Line>
                  <RatingContainer>
                    <StarRatingComponent
                      name="rate2"
                      editing={false}
                      renderStarIcon={() => (
                        <i
                          className="fa fa-star"
                          aria-hidden="true"
                          style={{ fontSize: "16px", letterSpacing: "1.5px" }}
                        ></i>
                      )}
                      starCount={5}
                      value={p.StarRating}
                      starColor={"#ffc741"}
                      emptyStarColor={"#e0e0e0"}
                    ></StarRatingComponent>
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
      </div>
    );
  }
}
export default LatestRecipe;

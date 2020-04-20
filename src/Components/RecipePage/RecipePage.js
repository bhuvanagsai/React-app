import React , {Component} from 'react';
import Search from '../../CommonComponents/Search/Search';
import {RecipeBannerContainer} from '../Styles';
import {TitleAlignment ,RecipeHeading,RatingsContainer,RecipeImageContainer,RecipeDetails,PrintButton,RecipeDescription} from './Styles';
import StarRating from '../StarRating';
import ViewRecipeDetails from './ViewRecipeDetails/ViewRecipeDetails';
import Ingredients from './Ingredients/Ingredients';
import Directions from './Directions/Directions';
import styled from 'styled-components';
const HeaderContainer = styled.h3`
    font-size: 22px;
    color: #707070;
    font-weight: 500;
    line-height: 34px;
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
`
class RecipePage extends Component {
    state = {
        recipe : [
            {
                id: 1,
                RecipeImage: require("../../assets/recipePhoto-01.webp"),
                RecipeName: "Chunky Beef Stew",
                Description:
                "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
                perpTime: " 30 min",
                cooking: " 2 hours",
                Rating: 5,
                servings: 3,
                preparedBy: "BY SANDRA FORTIN",
                calories:"632 Kcal",
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
              }
        ]  ,
    }
    render(){
        return(
            <div className="wrapper wrapper-margin">
                <div>
                    <RecipeBannerContainer  style = {{width: "100%"}}>
                        <TitleAlignment>
                            <RecipeHeading>{this.state.recipe[0].RecipeName}</RecipeHeading>
                            <RatingsContainer>
                                {[null,null,null,null,null].map((_, index) => {
                                return (
                                <StarRating
                                    color={"#ffc741"}
                                />
                                );
                                })}
                                <span> (4 reviews)</span>
                            </RatingsContainer>
                        </TitleAlignment>
                        <RecipeImageContainer src = {this.state.recipe[0].RecipeImage}></RecipeImageContainer>
                        <RecipeDetails>
                            <ViewRecipeDetails viewRecipe = {this.state.recipe[0]}/>
                            <PrintButton>
                                <i className ="fa fa-print" aria-hidden="true"></i>
                                <a href = "#Print">PRINT</a>
                            </PrintButton>
                        </RecipeDetails>
                    </RecipeBannerContainer >
                    <RecipeDescription>{this.state.recipe[0].Description}</RecipeDescription>
                    <div>
                        <HeaderContainer>Ingredients</HeaderContainer>
                        <Ingredients ingredients = {this.state.recipe[0]} checked = {this.state.checked} handleCheckboxstatus = {this.handleCheckboxChange}/>
                    </div>
                    <div>
                    <HeaderContainer>Directions</HeaderContainer>
                    <Directions directions = {this.state.recipe[0]}></Directions>
                </div>
                </div>
                <Search/>
            </div>
        );
    }
}
export default RecipePage;
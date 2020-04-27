import React  from 'react';
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
const RecipePage = (props) =>{
        return(
            <div className="wrapper wrapper-margin">
                <div style = {{width: "75%"}}>
                    <RecipeBannerContainer  style = {{width: "100%"}}>
                        <TitleAlignment>
                            <RecipeHeading>{props.data.RecipeName}</RecipeHeading>
                            <RatingsContainer>
                                {[null,null,null,null,null].map((_, index) => {
                                return (
                                <StarRating key = {index}
                                    color={"#ffc741"}
                                />
                                );
                                })}
                                <span> (4 reviews)</span>
                            </RatingsContainer>
                        </TitleAlignment>
                        <RecipeImageContainer src = {require('../../assets/recipePhoto-01.webp')}></RecipeImageContainer>
                        <RecipeDetails>
                            <ViewRecipeDetails viewRecipe = {props.data}/>
                            <PrintButton>
                                <i className ="fa fa-print" aria-hidden="true"></i>
                                <a href = "#Print">PRINT</a>
                            </PrintButton>
                        </RecipeDetails>
                    </RecipeBannerContainer >
                    <RecipeDescription>{props.data.Description}</RecipeDescription>
                    <div>
                        <HeaderContainer>Ingredients</HeaderContainer>
                        <Ingredients ingredients = {props.data}/>
                    </div>
                    <div>
                    <HeaderContainer>Directions</HeaderContainer>
                    <Directions directions = {props.data}></Directions>
                </div>
                </div>
                <Search/>
            </div>
        );
}
export default RecipePage;
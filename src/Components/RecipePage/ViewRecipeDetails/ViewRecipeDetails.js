import React from 'react';
import styled from 'styled-components';

const RecipeDetailsContainer = styled.ul`
list-style: none;
display:flex;
font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
font-size:14px;
float:left;
margin:0;
padding:0;
li{
    border-right: 1px solid #d8d8d8;
    color: gray;
    margin: 0px 10px;
    padding-right: 20px;
    div{
        font-weight: 600;
        color: #707070;
    }
}
`
const ViewRecipeDetails = (props) =>{
    return(
        <RecipeDetailsContainer>
            <li>
                <span>Serves: </span>
                <br/>
                <div>{props.viewRecipe.servings} people</div>
            </li>
            <li>
                <span>Prep Time: </span>
                <br/>
                <div>{props.viewRecipe.prepTime}</div>
            </li>
            <li>
                <span>Cooking: </span>
                <br/>
                <div>{props.viewRecipe.cooking}</div>
            </li>
            <li>
                <span>Calories:</span>
                <br/>
                <div>{props.viewRecipe.calories}</div>
            </li>
        </RecipeDetailsContainer>
    );
}
export default ViewRecipeDetails;
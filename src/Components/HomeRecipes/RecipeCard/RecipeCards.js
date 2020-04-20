import React from 'react';
import{  RecipeCardsContainer,
    RecipeCards,
    ImageContainer,
    ImageOverlay,
    ViewButton,
    Link
} from './Styles';
import { BrowserRouter as NavLink } from "react-router-dom";
import RecipeCardDetails from '../RecipeCardDetails/RecipeCardDetails';

const RecipeCard = (props)=>{
    return(
        <RecipeCardsContainer>
            {props.cardDetails.map((p) => (
              <RecipeCards key={p.id} view={props.viewStatus}>
                <ImageContainer src={p.RecipeImage} onMouseEnter = {() => {props.HoverImageIn(p.id)}} onMouseOut= {() => {props.HoverImageOut(p.id)}}view={props.viewStatus}/>
                <ImageOverlay view={props.viewStatus} hover={p.id == props.hover}/>
                <ViewButton view={props.viewStatus} hover = {p.id == props.hover} onClick = {() => props.buttonHandler(p)}> 
                    <NavLink to='/Recipes'>View recipe</NavLink>
                </ViewButton>
                <RecipeCardDetails details = {p} viewStatus={props.viewStatus} Ratings={props.Ratings}/>
              </RecipeCards>
            ))}
        </RecipeCardsContainer>
    )
}
export default RecipeCard;
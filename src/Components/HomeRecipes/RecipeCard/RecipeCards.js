import React from 'react';
import{  RecipeCardsContainer,
    RecipeCards,
    ImageContainer,
    ImageOverlay,
    ViewButton,
    RecipeNotFound
} from './Styles';
import RecipeCardDetails from '../RecipeCardDetails/RecipeCardDetails';

const RecipeCard = (props)=>{
    let cardlength = props.cardDetails.length;
    return(
        <div>
        {cardlength == 0 ? <RecipeNotFound>Recipe not found</RecipeNotFound> : 
        <RecipeCardsContainer>
        {props.cardDetails.map((p) => (
            <RecipeCards key={p.id} view={props.viewStatus}>
            <ImageContainer src={p.RecipeImage} onMouseEnter = {() => {props.HoverImageIn(p.id)}} onMouseOut= {() => {props.HoverImageOut(p.id)}}view={props.viewStatus}/>
            <ImageOverlay view={props.viewStatus} hover={p.id == props.hover}/>
            <ViewButton view={props.viewStatus} hover = {p.id == props.hover} onClick = {() => props.buttonHandler(p)}> 
                View recipe
            </ViewButton>
            <RecipeCardDetails details = {p} viewStatus={props.viewStatus} Ratings={props.Ratings}/>
            </RecipeCards>
        ))}
    </RecipeCardsContainer>
        }
        </div>
    )
}
export default RecipeCard;
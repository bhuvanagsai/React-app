import React from "react";
import {
  RecipeCardsContainer,
  RecipeCards,
  ImageContainer,
  ImageOverlay,
  ViewButton,
  RecipeNotFound,
} from "./Styles";
import RecipeCardDetails from "../RecipeCardDetails/RecipeCardDetails";

const RecipeCard = (props) => {
  let cardlength = props.cardDetails.length;
  return (
    <div>
      {cardlength === 0 ? (
        <RecipeNotFound>Recipe not found</RecipeNotFound>
      ) : (
        <RecipeCardsContainer>
          {props.cardDetails.map((p,index) => (
            <RecipeCards key={index} view={props.viewStatus}>
              <ImageContainer
                src={require(`./${process.env.PUBLIC_URL}/../../../assets/${p.RecipeImage}.jpg`)}
                alt="Recipe image"
                onMouseEnter={() => {
                  props.HoverImageIn(index);
                }}
                onMouseOut={() => {
                  props.HoverImageOut(index);
                }}
                view={props.viewStatus}
              />
              <ImageOverlay
                view={props.viewStatus}
                hover={Number(index) === Number(props.hover)}
              />
              <ViewButton
                view={props.viewStatus}
                hover={Number(index) === Number(props.hover)}
                onClick={() => props.buttonHandler(p)}
              >
                View recipe
              </ViewButton>
              <RecipeCardDetails
                details={p}
                viewStatus={props.viewStatus}
                Ratings={props.Ratings}
              />
            </RecipeCards>
          ))}
        </RecipeCardsContainer>
      )}
    </div>
  );
};
export default RecipeCard;

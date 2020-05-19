import React from "react";

import {
  BannerContainer,
  SliderImage,
  SliderContents,
  BannerOverlay,
  RecipeType,
  RecipeName,
  ServingsContainer,
  RecipeDetails,
  ViewButton,
  ServingContent,
} from '../Banner/Styles';

export default function Banner(props) {
  return (
    <BannerContainer>
      <SliderImage src={props.content.RecipeImage} alt="slider" />
      <BannerOverlay />
      <SliderContents>
        <RecipeType>{props.content.type}</RecipeType>
        <RecipeName>{props.content.RecipeName}</RecipeName>
        <RecipeDetails>
          <ServingsContainer>
            <i className="fa fa-cutlery" aria-hidden="true" title = "cutlery icon"></i>
            <ServingContent>{props.content.servings} servings</ServingContent>
          </ServingsContainer>

          <ServingsContainer>
            <i className="fa fa-clock-o" aria-hidden="true" title  = "Clock icon"></i>
            <ServingContent>{props.content.cooking} {props.content.prepTime}</ServingContent>
          </ServingsContainer>

          <ServingsContainer>
            <i className="fa fa-user" aria-hidden="true" title = "User icon"></i>
            <ServingContent>{props.content.preparedBy}</ServingContent>
          </ServingsContainer>
        </RecipeDetails>
        <ViewButton onClick = {()=> props.buttonHandler(props.content)}>
          View recipe
        </ViewButton>
      </SliderContents>
    </BannerContainer>
  );
}

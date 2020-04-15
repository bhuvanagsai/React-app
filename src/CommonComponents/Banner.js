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
} from "../CommonComponents/Styles";

export default function Banner(props) {
  return (
    <BannerContainer>
      <SliderImage src={props.content.slider_img} alt="slider" />
      <BannerOverlay />
      <SliderContents>
        <RecipeType>{props.content.type}</RecipeType>
        <RecipeName>{props.content.recipe}</RecipeName>
        <RecipeDetails>
          <ServingsContainer>
            <i className="fa fa-cutlery" aria-hidden="true"></i>
            <ServingContent>{props.content.servings} servings</ServingContent>
          </ServingsContainer>

          <ServingsContainer>
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            <ServingContent>{props.content.prepTime}</ServingContent>
          </ServingsContainer>

          <ServingsContainer>
            <i className="fa fa-user" aria-hidden="true"></i>
            <ServingContent>{props.content.preparedBy}</ServingContent>
          </ServingsContainer>
        </RecipeDetails>
        <ViewButton>
          <a href="#View Recipe">View recipe</a>
        </ViewButton>
      </SliderContents>
    </BannerContainer>
  );
}

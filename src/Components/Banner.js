import React from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
    width:100%;
    height: 415px;
    position: relative;
    img{
        width:100%;
    }
`;
const SliderImage = styled.img`
  height: inherit;
`;
const SliderContents = styled.div`
  position: absolute;
  max-width: 960px;
  margin:0 auto;
  top: 20%;
  right: 0;
  left: 0px;
`;
const BannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  background: #333;
  opacity: 0.5;
  position: absolute;
`;
const RecipeType = styled.div`
  width: max-content;
  background: #8dc63f;
  color: #fff;
  padding: 5px 9px;
  font-size: 13px;
`;
const RecipeName = styled.div`
  width: 400px;
  font-size: 48px;
  color: #fff;
  font-family: "arvo";
  margin-top: 10px;
  line-height: 50px;
`;
const ServingsContainer = styled.div`
  color: #fff;
  margin-right: 15px;
  display: flex;
  align-items: center;
`;
const ServingContent = styled.div`
  padding: 0px 5px;
`;
const RecipeDetails = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;
`;
const ViewButton = styled.div`
  border: 3px solid #fff;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0;
  width: 130px;
  margin-top: 18px;
  z-index: 10;
  text-align: center;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
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

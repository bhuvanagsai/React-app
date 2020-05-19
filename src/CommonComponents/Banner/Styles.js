import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: ${(props)=> (props.RecipeBanner ? "220px" : "415px")};
  position: relative;
  img {
    width: 100%;
    height: inherit;
  }
`;
export const SliderImage = styled.img`
  height: inherit;
`;
export const SliderContents = styled.div`
  position: absolute;
  max-width: 960px;
  margin: 0 auto;
  top: 20%;
  right: 0;
  left: 0px;
`;
export const BannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  background: #333;
  opacity: 0.5;
  position: absolute;
`;
export const RecipeType = styled.div`
  width: max-content;
  background: ${(props) => props.theme.primaryColor};
  color: #fff;
  padding: 5px 9px;
  font-size: 13px;
`;
export const RecipeName = styled.div`
  width: 400px;
  font-size: 48px;
  color: #fff;
  font-family: "arvo";
  margin-top: 10px;
  line-height: 50px;
`;
export const ServingsContainer = styled.div`
  color: #fff;
  margin-right: 15px;
  display: flex;
  align-items: center;
  font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
`;
export const ServingContent = styled.div`
  padding: 0px 5px;
`;
export const RecipeDetails = styled.div`
  display: flex;
  text-transform: uppercase;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;
`;
export const ViewButton = styled.div`
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
  color: #fff;
`;
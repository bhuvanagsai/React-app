import styled from 'styled-components';
export const RecipeCardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
export const RecipeCards = styled.div`
  width: ${(props) => (props.view ? "calc((100% / 3) - 20px)" : "100%")};
  margin: 10px;
  background: #f8f8f8;
  display: ${(props) => (props.view ? "block" : "flex")};
  position: relative;
`;
export const ImageContainer = styled.img`
  width: ${(props) => (props.view ? "100%" : "35%")};
  height: ${(props) => (props.view ? "200px" : "100%")};
`;
export const ImageOverlay = styled.div`
  width: ${(props) => (props.view ? "100%" : "35%")};
  height: ${(props) => (props.view ? "200px" : "100%")};
  top: 0;
  background: #333;
  opacity: 0.5;
  position: absolute;
  display: ${(props) => (props.hover ? "block" : "none")};
`;
export const ViewButton = styled.div`
  background-color: rgba(51, 51, 51, 0.8);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 10px 0;
  width: 103px;
  text-align: center;
  position: absolute;
  color:#fff;
  top: ${(props) => (props.view ? "20%" : "40%")};
  left: ${(props) => (props.view ? "27%" : "10%")};
  display: ${(props) => (props.hover ? "block" : "none")};
`;
export const Link = styled.a`
  text-decoration: none;
    color: #fff;
`
import styled from 'styled-components';
export const RecipeTime = styled.div`
  color: #909090;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: end;
  display: ${(props) => (props.view ? "block" : "none")};
`;


export const RecipeBannerContainer = styled.div`
    width:76%;
    position: relative;
    top: -39px;
    z-index: 1;
    background-color: #f8f8f8;
    :after{
      content: "";
      position: absolute;
      top: -48px;
      right: 0;
      border-width: 0 48px 48px 0;
      border-style: solid;
      border-color: #e0e0e0 transparent;
      z-index: 1;
    }
    :before{
      content: "";
    position: absolute;
    top: -48px;
    left: 0;
    right: 48px;
    border-width: 48px;
    border-style: solid;
    border-color: #f8f8f8;
    z-index: 1;
    }
`
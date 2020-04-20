import styled from  'styled-components';
export const RecipeDetails = styled.div`
  width: ${(props) => (props.view ? "auto" : "100%")};
  height: auto;
  padding: 20px;
  overflow:auto;
`;
export const RecipeName = styled.div`
  text-align: left;
  color: #606060;
  line-height: 26px;
  font-family: "Arvo";
  font-size: 19px;
  display: block;
  display: -webkit-box;
  height: ${(props) => (props.view ? "78px" : "auto")};
  margin: 0 auto;
  line-height: 1.4;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${(props) => (props.view ? "0px" : "10px")};
`;
export const Description = styled.p`
  display: ${(props) => (props.view ? "none" : "block")};
  color: gray;
  font-size: 14px;
`;
export const RatingContainer = styled.div`
  margin-top: 10px;
  float: ${(props) => (props.view ? "none" : "left")};
`;
export const Line = styled.hr`
  color: #e0e0e0;
  opacity: 0.2;
`;

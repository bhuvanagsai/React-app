import styled from "styled-components";
export const HeadLine = styled.div`
  font-size: 22px;
  background-color: #fff;
  padding-right: 10px;
  color: #606060;
  font-weight: 500;
  line-height: 34px;
  font-family: open sans, helveticaneue;
`;
export const RecipeLatestWrapper = styled.div`
  width: 76%;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const CenterLine = styled.div`
  width: 75%;
  height: 1px;
  background: #ebebeb;
  margin-top: 5px;
`;
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
export const RecipeDetails = styled.div`
  width: ${(props) => (props.view ? "auto" : "100%")};
  height: auto;
  padding: 20px;
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
export const RatingContainer = styled.div`
  margin-top: 10px;
`;
export const RecipeTime = styled.div`
  color: #909090;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: end;
  display: ${(props) => (props.view ? "block" : "none")};
`;
export const Line = styled.hr`
  color: #e0e0e0;
  opacity: 0.2;
`;
export const ViewTypeContainer = styled.div`
  background: #8dc63f;
  display: flex;
  float: right;
  color: white;
  border-radius: 26px;
  padding: 5px;
  width: 10%;
`;
export const ViewGrid = styled.div`
  padding: 0px 5px;
  background: ${(props) => (props.view ? "#ffffff" : "#8dc63f")};
  color: ${(props) => (props.view ? "#8dc63f" : "#ffffff")};
  border-radius: ${(props) => (props.view ? "10px" : "0px")};
  width: 45%;
  text-align: center;
  font-size: 14px;
  font-weight: 650;
  cursor: pointer;
`;
export const Description = styled.p`
  display: ${(props) => (props.view ? "none" : "block")};
  color: gray;
  font-size: 14px;
`;
export const ListRecipeAlignment = styled.div`
  float: right;
  margin-right: 10px;
  color: #909090;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: end;
  margin-top: 5px;
  display: ${(props) => (props.view ? "none" : "block")};
  i {
    margin-right: 5px;
  }
`;
export const ListRecipeContainer = styled.div`
  float: right;
  width: 70%;
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
  top: ${(props) => (props.view ? "20%" : "40%")};
  left: ${(props) => (props.view ? "27%" : "10%")};
  display: ${(props) => (props.hover ? "block" : "none")};
  a {
    text-decoration: none;
    color: #fff;
  }
`;
export const SlideBar = styled.div`
  float: left;
  width: 24%;
  margin-left: 17px;
`;
export const SearchContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  border: 1px solid #e8e8e8;
  margin-bottom: 20px;
  input {
    border: none;
    width: 90%;
    outline: none;
    padding: 13px;
    font-family: inherit;
    font-weight: 600;
    color: gray;
  }
`;
export const SearchIcon = styled.div`
  background: #8dc63f;
  padding: 11px 12px;
  width: 10%;
  color: #fff;
`;
export const AuthorImageContainer = styled.img`
  float: right;
  border-radius: 50%;
  width: 33%;
`;
export const AuthorContact = styled.div`
  border: 1px solid #e8e8e8;
  padding: 25px;
  overflow: auto;
  a {
    color: #a0a0a0;
    text-decoration: none;
    &:hover {
      color: #8dc63f;
    }
  }
  p {
    color: gray;
  }
`;
export const AuthorDetails = styled.div`
  width: 60%;
  float: left;
`;
export const AuthorInfo = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

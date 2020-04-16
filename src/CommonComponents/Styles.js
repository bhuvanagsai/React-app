import styled from 'styled-components';

export const BannerContainer = styled.div`
  width: 100%;
  height: 415px;
  position: relative;
  img {
    width: 100%;
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
  background: #8dc63f;
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
  a {
    text-decoration: none;
    color: #fff;
  }
`;
export const SliderNavBar = styled.div`
  width: 209px;
  height: auto;
  border-left: 1px solid #e3e3e3;
  padding: 16px 15px;
  font-size: 14px;
  font-weight: 650;
  color: ${(props) => (props.active ? "#fff" : "gray")};
  background:${(props) => (props.active ? "#8dc63f" : "#f2f2f2")};
`;
export const SliderContent = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NavBar = styled.li`
  font-weight: 600;
  font-size: 14px;
  border-bottom: 3px solid transparent;
  padding: 25px 20px;
  position: relative;
  a {
    text-decoration: none;
    color: #707070;
    position: relative;
  }
  a:hover {
    color: #505050;
  }
 /* &:hover {
    border-bottom: 3px solid #8dc63f !important;
  }  */
`;
export const HeaderNav = styled.ul`
  display: flex;
  margin: 0;
  width: 80%;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  position:relative;
`;
export const Dropdown = styled.ul`
    background-color: #333;
    border-top: 3px solid #8dc63f;
    list-style: none;
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    color: #9c9c9c;
    width: 150px;
    display:${(props) => (props.hover? "block" : "none")};
    li{
      padding:10px;
      border-bottom:1px solid #9c9c9c; 
    }
`
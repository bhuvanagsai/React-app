import styled from 'styled-components';
export const TitleAlignment= styled.div`
    padding:10px;
    margin-bottom: 7%;
` 
export const RecipeHeading = styled.h2`
    font-size: 30px;
    font-family: arvo;
    z-index: 1;
    position: absolute;
    top: -3%;
    line-height: 36px;
    color: #606060;
    font-weight: 500;
    margin: 0 25px;
`
export const RatingsContainer= styled.div`
    position: absolute;
    z-index: 1;
    top: 8%;
    left: 5%;
    span{
        color: #909090;
    }
`
export const RecipeImageContainer = styled.img`
    height: 320px;
    width: 100%;
`
export const RecipeDetails = styled.div`
    overflow:auto;
    padding:20px;
`
export const PrintButton = styled.button`
    float: right;
    background: #8dc63f;
    width: 74px;
    padding: 8px;
    color: white;
    border: none;
    margin-top: 3px;
    a{
        color:inherit;
        text-decoration:none;
        margin-left:5px;
    }
`
export const RecipeDescription = styled.p`
    margin:  0 0 0 10px 0;
    color:gray;
`
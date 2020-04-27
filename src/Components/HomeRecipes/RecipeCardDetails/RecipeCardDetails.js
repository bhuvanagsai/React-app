import React from 'react';
import{ 
    RecipeDetails,
    RecipeName,
    Description,
    RatingContainer,
    Line,
} from './Styles';
import StarRating from "../../StarRating";
import ServingDetails from '../ServingDetails';

const RecipeCardDetails = (props) =>{
    return(
        <RecipeDetails view={props.viewStatus}>
            <RecipeName view={props.viewStatus}>{props.details.RecipeName}</RecipeName>
            <Description view={props.viewStatus}>
            {props.details.Description}
            </Description>
            <Line></Line>
            <RatingContainer view={props.viewStatus}>
                {props.Ratings.map((_, index) => {
                    return (
                    <StarRating key ={index}
                        color={index < props.details.Rating ? "#ffc741" : "#e0e0e0"}
                    />
                    );
                })}
            </RatingContainer>
            <ServingDetails servingDetails= {props.details} viewStatus={props.viewStatus}/>
        </RecipeDetails>
    );
}
export default RecipeCardDetails;
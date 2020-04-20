import React from "react";
import RecipeBanner from "../CommonComponents/RecipeBanner/RecipeBanner";
import RecipePage from "../Components/RecipePage/RecipePage";

export default function Recipe(props){
    return(
        <div>
            <RecipeBanner/>
            <RecipePage data = {props.history.location.state}/>
        </div>
        
    );
}
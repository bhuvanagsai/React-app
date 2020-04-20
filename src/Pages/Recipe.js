import React from "react";
import RecipeBanner from "../CommonComponents/RecipeBanner/RecipeBanner";
import RecipePage from "../Components/RecipePage/RecipePage";

export default function Recipe(props){
    console.log(props)
    return(
        <div>
            <RecipeBanner/>
            <RecipePage />
        </div>
        
    );
}
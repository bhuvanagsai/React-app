import React from "react";
import BannerSlider from "../CommonComponents/BannerSlider/BannerSlider";
import LatestRecipe from "../Components/HomeRecipes/LatestRecipeCard/LatestRecipe";

export default function Home(){
    
    return(
        <div>
            <BannerSlider/>
            <LatestRecipe />
        </div>
        
    );
}
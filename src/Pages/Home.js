import React, { Component } from "react";
import BannerSlider from "../CommonComponents/BannerSlider/BannerSlider";
import LatestRecipe from "../Components/HomeRecipes/LatestRecipeCard/LatestRecipe";

export default function Home(props){
    console.log(props)
    return(
        <div>
            <BannerSlider/>
            <LatestRecipe />
        </div>
        
    );
}
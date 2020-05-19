import React from "react";
import BannerSlider from "../CommonComponents/BannerSlider/BannerSlider";
import LatestRecipe from "../Components/HomeRecipes/LatestRecipeCard/LatestRecipe";
import Header from "../CommonComponents/Header/Header";
import Footer from '../CommonComponents/Footer/Footer';
import Themes from '../CommonComponents/Themes/Theming'
export default function Home(){
    
    return(
        <div>
            <Header/>
            <BannerSlider/>
            <Themes/>
            <LatestRecipe />
            <Footer/>
        </div>
        
    );
}
import React ,{useEffect} from "react";
import RecipeBanner from "../CommonComponents/RecipeBanner/RecipeBanner";
import RecipePage from "../Components/RecipePage/RecipePage";

export default function Recipe(props){
    const  recipedata =  props.history.location.state.RecipeData;
    useEffect(() =>{
        if(!recipedata){
            props.history.push({
                pathname: "Home",
              });
        }
      });

    return recipedata ?(
        <div>
            <RecipeBanner/>
            <RecipePage data = {recipedata} />
        </div>
        
    ):null;
}
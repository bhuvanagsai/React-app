import React ,{useEffect} from "react";
import RecipeBanner from "../CommonComponents/RecipeBanner/RecipeBanner";
import RecipePage from "../Components/RecipePage/RecipePage";
import Header from "../CommonComponents/Header/Header";
import Footer from "../CommonComponents/Footer/Footer";
export default function Recipe(props){
    const  recipedata =  props.history.location.state;
    useEffect(() =>{
        if(!recipedata){
            props.history.push({
                pathname: "Home",
              });
        }
      }, []);

    return recipedata ?(
        <div>
            <Header/>
            <RecipeBanner/>
            <RecipePage data = {recipedata}/>
            <Footer/>
        </div>
        
    ):null;
}
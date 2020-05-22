import React from 'react';
import Navigation from '../CommonComponents/Navigation/Navigation';
import SubmitRecipe from '../Components/SubmitRecipe/SubmitRecipePage';

const SubmitRecipePage = () =>{
    return(
        <div>
            <Navigation page = "Submit Recipe"/>
            <SubmitRecipe/>
        </div>
        
    );
}

export default SubmitRecipePage;
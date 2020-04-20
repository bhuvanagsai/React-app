import React, { Component } from 'react';
import {BannerContainer ,BannerOverlay} from '../Banner/Styles';

class RecipeBanner extends Component{
    render(){
        return(
            <BannerContainer RecipeBanner>
                <img src = {require('../../assets/recipeBackground.jpg')} alt = "rtyu"></img>
                <BannerOverlay />
            </BannerContainer>
        );
    }
}
export default RecipeBanner;
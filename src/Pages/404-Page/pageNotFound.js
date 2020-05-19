import React from 'react';
import {HeadLine,PageNotFoundContaier,Message,BackButton} from '../404-Page/Style';
const pageNotFound = () =>{
    return(
        <PageNotFoundContaier>
            <HeadLine>404 Page Not Found</HeadLine>
            <img src = {require('../../assets/404-images.jpg')} alt = "404Image"></img>
            <Message>What you're looking for may have been <br/>misplaced in Long Term Memory</Message>
            <BackButton><a href = "/">Back to Homepage</a></BackButton>
        </PageNotFoundContaier>
    );

}
export default pageNotFound;
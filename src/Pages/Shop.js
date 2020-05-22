import React from 'react';
import Shop from '../Components/ShopPage/ShopPage';
import Navigation from '../CommonComponents/Navigation/Navigation';

const ShopPage = () =>{
        return(
            <div>
                <Navigation page = "Shop"/>
                <Shop/>
            </div>
        ) 

}
export default ShopPage;
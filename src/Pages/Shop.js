import React from 'react';
import Shop from '../Components/ShopPage/ShopPage';
import Header from '../CommonComponents/Header/Header';
import Navigation from '../CommonComponents/Navigation/Navigation';
import Footer from '../CommonComponents/Footer/Footer';
const ShopPage = () =>{
        return(
            <div>
                <Header/>
                <Navigation page = "Shop"/>
                <Shop/>
                <Footer/>
            </div>
        ) 

}
export default ShopPage;
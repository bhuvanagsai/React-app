import React ,{useEffect} from 'react';
import Header from '../CommonComponents/Header/Header';
import Navigation from '../CommonComponents/Navigation/Navigation';
import Footer from '../CommonComponents/Footer/Footer';
import ProductPage from '../Components/ShopPage/ProductDetails/ProductDetails';
const Product = (props) =>{
    const  productdata =  props.history.location.state;
    useEffect(() =>{
        if(!productdata){
            props.history.push({
                pathname: "Home",
              });
        }
      }, []);
        return productdata ?(
            <div>
                <Header/>
                <Navigation page = "Shop"/>
                <ProductPage/>
                <Footer/>
            </div>
        ):null;
}
export default Product;
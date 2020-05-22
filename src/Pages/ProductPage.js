import React ,{useEffect} from 'react';
import Navigation from '../CommonComponents/Navigation/Navigation';
import ProductPage from '../Components/ShopPage/ProductDetails/ProductDetails';
const Product = (props) =>{
    const  productdata =  props.history.location.state;
    useEffect(() =>{
        if(!productdata){
            props.history.push({
                pathname: "Home",
              });
        }
      });
        return productdata ?(
            <div>
                <Navigation page = "Shop"/>
                <ProductPage/>
            </div>
        ):null;
}
export default Product;
import React, { Component } from 'react';

import styled from 'styled-components';

import './BannerSlider.css';

const SliderNavBar = styled.div` 
    width: 204px;
    height: 75px;
    border-left: 1px solid #e3e3e3;
    padding: 0 15px;
    font-size:14px;
    font-weight: 650;
    color:gray;
    background: #f2f2f2;
    &:hover{
        background:#8dc63f;
        color: #fff;
    }
    `
class BannerSlider extends Component{
    state = {
        Recipe : [
            {id :1,recipe :"Mexican Grilled",with: "Corn Recipe"},
            {id :2,recipe :"Roast Chicken",with: "With Lemon Gravy"},
            {id :3,recipe :"Avocado Melon Salad",with: " With Lime Vinaigrette"},
            {id :4,recipe :"Chunky Beef Stew",with: ""}
            // {recipe :"Farmhouse Vegetable",with: " And Barley Soup"}
        ],
        
    }
    // const index = 0;
    switchHandler = (index) =>{
        console.log()
        
    }
    render(){
        return(
            <div className = "recipe-container">
                {this.state.Recipe.map((p,index)=>
                <SliderNavBar key = {p.id} onClick ={ () => {this.switchHandler(index)} } ><div className="content"><div>{p.recipe}<br></br>{p.with}</div></div></SliderNavBar>
                )}
            </div>
        );
    }
}
export default BannerSlider;
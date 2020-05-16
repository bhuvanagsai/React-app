import React from 'react';
import {TitleBar, BreadCrumbs} from '../Navigation/Styles';
const Navigation = (props) => {
    return (
        <div  style = {{backgroundColor : "#f6f6f6"}}>
            <div className="wrapper" style = {{padding:  "10px"}}>
                <div style = {{width : "100%"}}>
                    <TitleBar>{props.page}</TitleBar>
                    <BreadCrumbs>
                        You are here : 
                        <a href = "/home">Home</a> >
                        <span>{props.page}</span>
                    </BreadCrumbs>
                </div>
            </div>
        </div>
        
    );
}
export default Navigation;
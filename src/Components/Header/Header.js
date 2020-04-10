import React,{Component}  from 'react';
import styled from 'styled-components';
import './Header.css';
const NavBar = styled.div` 
        font-weight: 600;
        font-size: 14px;
        border-bottom:3px solid transparent;
        padding:25px 20px;
       
        &:hover{
            border-bottom:3px  solid #8dc63f!important;
        }
    `
class Header extends Component{
    
    state = {
        headerItems :[ 
            {id : 1,nav :"Home"},
            {id : 2,nav :"Demos"},
            {id :3,nav :"Recipes"},
            {id : 4,nav :"Pages"},
            {id : 5,nav :"Shop"},
            {id : 6,nav :"Submit Recepie"}
        ],
        show :false
    }
    render(){
        return (
            <ul className = "HeaderItems">
                {this.state.headerItems.map((p,index) =>
                    <NavBar key = {p.id} className = "headerNav"><a href = {p.nav}>{p.nav}</a></NavBar>
                )}
            </ul>
        )
    }
}

export default Header;
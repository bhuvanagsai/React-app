import React, { Component } from 'react';
import {SideBar,SearchContainer,SearchIcon} from '../Search/Styles';
import Author from '../AuthorCard/AuthorCard';

class Search extends Component{
    render(){
        return(
            <SideBar>
                <SearchContainer>
                    <input placeholder = "Search for recipes"/>
                    <SearchIcon><i className="fa fa-search" aria-hidden="true"></i></SearchIcon>
                </SearchContainer>    
                <Author/>            
            </SideBar>
        );
    }

}

export default Search;
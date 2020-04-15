import React, { Component } from 'react';
import {SlideBar,SearchContainer,SearchIcon} from '../Components/Styles';
import Author from './AuthorCard';

class Search extends Component{
    render(){
        return(
            <SlideBar>
                <SearchContainer>
                    <input placeholder = "Search for recipes"/>
                    <SearchIcon><i className="fa fa-search" aria-hidden="true"></i></SearchIcon>
                </SearchContainer>    
                <Author/>            
            </SlideBar>
        );
    }

}

export default Search;
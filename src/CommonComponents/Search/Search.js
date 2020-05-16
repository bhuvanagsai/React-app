import React  from 'react';
import {SideBar,SearchContainer,SearchIcon} from '../Search/Styles';
import Author from '../AuthorCard/AuthorCard';

const  Search = (props) => {
        return(
            <SideBar>
                <SearchContainer>
                    <input placeholder = "Search for recipes" onChange = {props.SearchChange}/>
                    <SearchIcon><i className="fa fa-search" aria-hidden="true"></i></SearchIcon>
                </SearchContainer>    
                <Author/>            
            </SideBar>
        );

}

export default Search;
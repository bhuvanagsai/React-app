import React from 'react';
import styled from 'styled-components';

const ListRecipeAlignment = styled.div`
  float: right;
  margin-right: 10px;
  color: #909090;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: end;
  margin-top: 5px;
  display: ${(props) => (props.view ? "none" : "block")};
  i {
    margin-right: 5px;
  }
`;
const ListRecipeContainer = styled.div`
  float: right;
  width: 70%;
  margin-top:${(props) => (props.view ? "0px" : "10px")};
`;
const ServingDetails =(props) =>{
    return (
        <ListRecipeContainer view={props.viewStatus}>
            <ListRecipeAlignment view={props.viewStatus}>
                <i className="fa fa-user" aria-hidden="true"></i>
                {props.servingDetails.preparedBy}
            </ListRecipeAlignment>
            <ListRecipeAlignment >
                <i className="fa fa-clock-o" aria-hidden="true"></i>
                {props.servingDetails.prepTime}
            </ListRecipeAlignment>
            <ListRecipeAlignment view={props.viewStatus}>
                <i className="fa fa-cutlery" aria-hidden="true"></i>
                {props.servingDetails.servings} servings
            </ListRecipeAlignment>
        </ListRecipeContainer>
    );

}


export default ServingDetails;
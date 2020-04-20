import React from 'react';
import styled from 'styled-components';
import './Ingredients.css';
const IngredientsContainer = styled.ul`
    background-color: #fff;
    border: 1px solid #e9e9e9;
    padding: 39px 0;
    position: relative;
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
    :before ,:after{
    content: "";
    height: 100%;
    width: 1px;
    background-color: #ffd4d4;
    position: absolute;
    top: 0;
    left:12%;
    }
    :after{
    content: "";
    height: 100%;
    width: 1px;
    background-color: #ffd4d4;
    position: absolute;
    top: 0;
    left:11.5%;
    }
`
const IngredientsAdded = styled.li`
    border-top: 1px solid #e9e9e9;
    padding: 10px 160px;
    font-size: 14px;
    font-weight: 400;
    color:gray;

    :last-child{
        border-bottom:1px solid #e9e9e9;
    }
`

export default function Ingredients(props){
    return(
    
        <IngredientsContainer>
            {props.ingredients.ingredients.map((p) =>(
                <IngredientsAdded key = {p.id}>
                    <label className="container">{p}
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
            </IngredientsAdded>
            ))}
        </IngredientsContainer>
    );
 }           
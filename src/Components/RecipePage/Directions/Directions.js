import React from 'react';
import styled from 'styled-components';
const DirectionSteps = styled.li`
    font-size:14px;
    color:#808080;
    padding: 13px 34px;
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
`
const DirectionsContainer = styled.div`
    display:flex;
    align-items:center;
    div{
        padding: 7px 13px;
        background-color:#f4f4f4;
        color:#999;
        font-weight: 700;
        font-size: 16px;
    }
`
export default function Directions(props){
    return (
        <ul style = {{padding:0}}>
            {props.directions.directions.map((p,index)=>(
                <DirectionsContainer>
                    <div >{index+1}</div>
                    <DirectionSteps>{p}</DirectionSteps>
                </DirectionsContainer>
                
            ))}
        </ul>
    );

}
import React from 'react';
import styled from 'styled-components';

const ViewTypeContainer = styled.div`
  background: ${(props) => (props.theme.primaryColor)};
  display: flex;
  float: right;
  color: white;
  border-radius: 26px;
  padding: 5px;
  width: 10%;
  margin-right: 10px;
`;
const ViewGrid = styled.div`
  padding: 0px 5px;
  background: ${(props) => (props.view ? "#ffffff" : props.theme.primaryColor)};
  color: ${(props) => (props.view ? props.theme.primaryColor : "#ffffff")};
  border-radius: ${(props) => (props.view ? "10px" : "0px")};
  width: 45%;
  text-align: center;
  font-size: 14px;
  font-weight: 650;
  cursor: pointer;
`;
const ViewType = ( props) =>{
return(
    <ViewTypeContainer>
        <ViewGrid view={props.viewStatus} onClick={() => {props.is_List()}}>
            Grid
        </ViewGrid>
        <ViewGrid view={!props.viewStatus} onClick={() =>{props.is_List()}}>
            List
        </ViewGrid>
    </ViewTypeContainer>
);
}

export default ViewType;
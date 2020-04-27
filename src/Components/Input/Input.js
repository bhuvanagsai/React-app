import React from 'react'
import {Input,InputComponent,ErrorMessage} from '../Login/Styles';
const input = (props) =>{
    return(
        <InputComponent>
            <label>{props.label}</label>
            <Input {...props.elementConfig} value = {props.value} onChange ={props.changed}/>
            <ErrorMessage errMsgStatus=  {props.ErrorMessage}>Please Enter the Valid {props.label}</ErrorMessage>
        </InputComponent>
    );

}
export default input;
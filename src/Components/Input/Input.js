import React, { useState } from "react";
import {
  Input,
  InputComponent,
  ErrorMessage,
  TextArea,
  Select,
  Option,
  CaretIcon,
  MultiInput,
  IngredientsWrapper,
  ButtonStyle
} from "../Login/Styles";

const InputData = (props) => {
  let inputElement = null;
  const [show, setShow] = useState(false);
  const showStatus = () => {
    setShow(!show);
  };
  switch (props.elementType) {
    case "input":
      inputElement = (
        <Input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextArea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      const dropdownOptions = (
        <Select show={show}>
          {props.elementConfig.options.map((option) => {
            return (
              <Option
                key={option}
                value={option}
                onClick={() => props.selected(option)}
              >
                {option}
              </Option>
            );
          })}
        </Select>
      );
      inputElement = (
        <div>
          <div
            onClick={() => {
              showStatus();
            }}
          >
            <Input value={props.value} onChange={props.changed} />
            {show === false ? (
              <CaretIcon
                className="fa fa-caret-down"
                aria-hidden="true"
                style={{ color: "#c4c4c4", marginLeft: "5px" }}
              ></CaretIcon>
            ) : (
              <CaretIcon
                className="fa fa-caret-up"
                aria-hidden="true"
                style={{ color: "#c4c4c4", marginLeft: "5px" }}
              ></CaretIcon>
            )}
          </div>
          {dropdownOptions}
        </div>
      );

      break;
    case "multipleInput":
      const IngrediantsAdd =props.value.map((ele,index) =>{
        return(
          <IngredientsWrapper key = {index} style={{ display: "flex" }}>
            <MultiInput
              placeholder = {props.elementConfig.placeholder[0]}
              value={props.value[index].value1}
              onChange={(event) => props.IngradientHandler(event, "name", index)}
            />
            <MultiInput
              placeholder = {props.elementConfig.placeholder[1]}
              value={props.value[index].value2}
              onChange={(event) => props.IngradientHandler(event, "quantity", index)}
            />
            <div onClick = {()=>{props.deleteIngredient(index)}}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            
          </IngredientsWrapper>
        )
      })
      inputElement = (
        <div>
          {IngrediantsAdd}
          <ButtonStyle onClick = {props.addIngHandler}>Add new ingredient</ButtonStyle>
        </div>
        
      );
      break;
      case "Directions" :
        const DirectionsAdd = props.value.map((ele,index) =>{
          return(
            <IngredientsWrapper key = {index} style={{ display: "flex" }}>
              <MultiInput style = {{width: "100%"}}
                placeholder = {props.elementConfig.placeholder}
                value={props.value[index].value}
                onChange={(event) => props.setDirections(event, index)}
              />
              <div onClick = {()=>{props.deleteDirections(index)}}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
              
            </IngredientsWrapper>
          )
        });
        inputElement = (
          <div>
            {DirectionsAdd}
            <ButtonStyle onClick = {props.addDirections}>Add Separator</ButtonStyle>
          </div>
        );
        break;
    default:
      inputElement = <input />;
  }
  return (
    <InputComponent>
      <label>{props.label}</label>
      <div style={{ position: "relative" }}>{inputElement}</div>
      <ErrorMessage errMsgStatus={props.ErrorMessage}>
        Please Enter the Valid {props.label}
      </ErrorMessage>
    </InputComponent>
  );
};
export default InputData;

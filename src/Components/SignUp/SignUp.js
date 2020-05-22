import React, { Component } from "react";
import {
  LoginContainer,
  ImageContainer,
  LoginPage,
  LoginCredential,
  LoginButton,
  ErrorMessage
} from "../Login/Styles";
import Input from '../Input/Input';
class SignUp extends Component {
  
  state = {
    signUpForm: {
      Fullname: {
        label: "FullName",
        elementType : "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter the Fullname",
        },
        value: "",
        ErrorMessage : 0
      },
      Email: {
        label: "Email",
        elementType : "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter the email",
        },
        value: "",
        ErrorMessage : 0
      },
      UserName: {
        label: "UserName",
        elementType : "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter the Username",
        },
        value: "",
        ErrorMessage : 0
      },
      Password: {
        label: "Password",
        elementType : "input",
        elementConfig: {
          type: "text",
          placeholder: "**********",
        },
        value: "",
        ErrorMessage : 0
      },
      RepeatPassword: {
        label: "Repeat Password",
        elementType : "input",
        elementConfig: {
          type: "text",
          placeholder: "**********",
        },
        value: "",
        ErrorMessage : 0
      },
    },
    UserErrorMsg : 0,
    

  };
  loginHandler = () => {
        this.props.history.push({
            pathname: "/",
          }); 
  };
  SubmitFormHandler = (event) => {
    event.preventDefault();
    const formData  = {};
    for (let elementIdentifier in this.state.signUpForm){
      formData[elementIdentifier] =  this.state.signUpForm[elementIdentifier].value;
    }
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let obj = users.find(obj => obj.UserName === this.state.signUpForm.UserName.value);
    if(!obj &&(formData.Fullname !== '' && formData.UserName !== '' && formData.Password !== '' && formData.Email !== '' && formData.RepeatPassword !== '')){
      users.push(formData);
      this.signUpValidation();
      localStorage.setItem("users", JSON.stringify(users));
      this.props.history.push({
        pathname: "/",
      });
    }
      else{
        this.signUpValidation();
        this.props.history.push({
          pathname: "SignUp",
        });
      }
      
    }
  signUpValidation = ()=>{
    
    const  formFiels = this.state.signUpForm;
    let updatedErrorMessage = {
      ...this.state.signUpForm,
    }
    for(const i in formFiels){
      if(formFiels[i].value === ""){
        const UpdatedErrorElement = {
          ...updatedErrorMessage[i],
        };
      UpdatedErrorElement.ErrorMessage = 1;
        updatedErrorMessage[i] = UpdatedErrorElement;
        this.setState({ signUpForm: updatedErrorMessage });
        this.setState({UserErrorMsg : 0});
      }
      else{
        const UpdatedErrorElement = {
          ...updatedErrorMessage[i],
        };
        UpdatedErrorElement.ErrorMessage = 0;
        updatedErrorMessage[i] = UpdatedErrorElement;
        this.setState({ signUpForm: updatedErrorMessage });
        this.setState({UserErrorMsg : 1});
      }
    }
  }
  inputChangedHandler = (event, InputIdentifier) =>{
    const updatedSignUpForm  = {
      ...this.state.signUpForm
    }
    const UpdatedFormElement = {
      ...updatedSignUpForm[InputIdentifier]
    };
    UpdatedFormElement.value = event.target.value;
    updatedSignUpForm[InputIdentifier] = UpdatedFormElement;
    this.setState({signUpForm : updatedSignUpForm });
  }

  render() {
    let UserDetailsArr = [];
    for (let key in this.state.signUpForm) {
      UserDetailsArr.push({
        id: key,
        config: this.state.signUpForm[key],
      });
    }
    return (
      <LoginPage>
        <ImageContainer /> 
        <LoginContainer>
          <LoginCredential>
            <h1>SIGN UP</h1>
            {UserDetailsArr.map((p) => (
              <Input
                key={p.id}
                label={p.config.label}
                elementType = {p.config.elementType}
                elementConfig={p.config.elementConfig}
                value={p.config.value}
                changed = { (event) => this.inputChangedHandler(event ,p.id)}
                ErrorMessage = {p.config.ErrorMessage}
              />
            ))}
            <ErrorMessage errMsgStatus = {this.state.Errmsg}>User Already exist</ErrorMessage>
            <LoginButton onClick={this.SubmitFormHandler}>Sign Up</LoginButton>
            <LoginButton onClick={this.loginHandler}>Login</LoginButton>
          </LoginCredential>
        </LoginContainer>
      </LoginPage>
    );
  }
}
export default SignUp;
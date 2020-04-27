import React, { Component } from "react";
import {
  LoginContainer,
  ImageContainer,
  LoginPage,
  LoginCredential,
  LoginButton,
  ErrorMessage
} from "../Login/Styles";
import Input from "../Input/Input";
class Login extends Component {
  state = {
    loginForm: {
      UserName: {
        label: "UserName",
        elementConfig: {
          type: "text",
          placeholder: "Enter the Username",
        },
        value: "",
        ErrorMessage : 0
        
      },
      Password: {
        label: "Password",
        elementConfig: {
          type: "text",
          placeholder: "Enter the password",
        },
        value: "",
        ErrorMessage : 0
      },
    },
    Errmsg : 0
  };

  loginHandler = () => {
    let username = this.state.loginForm.UserName.value;
    let password = this.state.loginForm.Password.value;
    if(localStorage.length !== 0){
      var items = JSON.parse(localStorage.users); 
      console.log(items)
      let obj = items.find(obj => obj.UserName === username && obj.Password === password);
      console.log(obj);
      if(obj) {
        this.FormValidation();
        this.props.history.push({
          pathname: "Home",
        });
        
      }
      else{
        this.FormValidation();
        this.props.history.push({
          pathname: "/",
        });
      }
    }

  };
  FormValidation = ()=>{
    const  formFiels = this.state.loginForm;
    let updatedErrorMessage = {
      ...this.state.loginForm,
    }
    for(const i in formFiels){
      if(formFiels[i].value === ""){
        const UpdatedErrorElement = {
          ...updatedErrorMessage[i],
        };
      UpdatedErrorElement.ErrorMessage = 1;
        updatedErrorMessage[i] = UpdatedErrorElement;
        this.setState({ loginForm: updatedErrorMessage });
        this.setState({Errmsg : 0});
      }
      else{
        const UpdatedErrorElement = {
          ...updatedErrorMessage[i],
        };
        UpdatedErrorElement.ErrorMessage = 0;
        updatedErrorMessage[i] = UpdatedErrorElement;
        this.setState({ loginForm: updatedErrorMessage });
        this.setState({Errmsg : 1});
      }
    }
  }
  SignUPHandler = () => {
    this.props.history.push({
      pathname: "SignUp",
    });
  };
  inputChangedHandler = (event, InputIdentifier) => {
    const updatedLoginForm = {
      ...this.state.loginForm,
    };
    const UpdatedFormElement = {
      ...updatedLoginForm[InputIdentifier],
    };
    UpdatedFormElement.value = event.target.value;
    updatedLoginForm[InputIdentifier] = UpdatedFormElement;
    this.setState({ loginForm: updatedLoginForm });
  };
  render() {
    let UserDetailsArr = [];
    for (let key in this.state.loginForm) {
      UserDetailsArr.push({
        id: key,
        config: this.state.loginForm[key],
      });
    }
    return (
      <LoginPage>
        <ImageContainer />
        <LoginContainer>
          <LoginCredential>
            <h1>LOGIN</h1>
            {UserDetailsArr.map((p) => (
              <Input
                key={p.id}
                label={p.config.label}
                elementConfig={p.config.elementConfig}
                value={p.config.value}
                changed={(event) => this.inputChangedHandler(event, p.id)}
                ErrorMessage = {p.config.ErrorMessage}
              />
            ))}
            <ErrorMessage errMsgStatus = {this.state.Errmsg}>UserName and Password Doesn't Match</ErrorMessage>
            <LoginButton onClick={this.loginHandler}>Login</LoginButton>
            <LoginButton onClick={this.SignUPHandler}>SignUp</LoginButton>
          </LoginCredential>
        </LoginContainer>
      </LoginPage>
    );
  }
}
export default Login;

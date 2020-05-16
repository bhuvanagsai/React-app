import styled  from 'styled-components';
export const LoginContainer = styled.div`
    width: 520px;
    min-height: 100vh;
    background: #fff;
`
export const ImageContainer = styled.div`
    background-image: url(${require('../../assets/receipe.jpeg')});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: calc(100% - 520px);
`
export const LoginPage =styled.div`
    display:flex;
    width:100%;
`
export const Input = styled.input`
        border: none;
    outline: none;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    height: 50px;
    font-size: 15px;
    color: #555;
    font-family:open sans, helveticaneue;
`
export const InputComponent = styled.div`
    width:100%;
    margin-bottom:30px;
    label{
        font-size: 18px;
        color: #999;
        font-family:open sans, helveticaneue;
    }
`
export const LoginCredential= styled.div`
    padding: 15% 15%;
`
export const LoginButton = styled.button`
    background-color: #8dc63f;
    width: 170px;
    height: 50px;
    border-radius: 28px;
    border: none;
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
    outline:none;
    margin-right: 10px;
`
export const ErrorMessage = styled.p`
    color: red;
    font-size: 13px;
    font-family: open sans,helveticaneue;
    display:${(props) => (props.errMsgStatus ? "block" : "none")};
`
export const EyeIcon = styled.i`
    position: absolute;
    right:2%;
    bottom:20%;
`
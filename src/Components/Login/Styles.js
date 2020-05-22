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
export const MultiInput = styled.input`
background: transparent;
    margin: 2% 3%;
    padding: 9px 10px;
    border: 1px solid #e0e0e0;
    outline: none;
    margin-right: 10px;
    width: 43%;
    font-size: 15px;
    color: #555;
    font-family: open sans,helveticaneue;
`
export const TextArea = styled.textarea`
    border: none;
    outline: none;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    height: 50px;
    font-size: 15px;
    color: #555;
    font-family:open sans, helveticaneue;
`
export const Select = styled.ul`
    position: absolute;
  width: 100%;
  background-color: #f6f6f6;
  z-index: 1;
  display: ${props => props.show? "block":"none"};
  box-sizing: border-box;
  max-height: 180px;
  overflow-y: scroll;
`
export const Option = styled.li`
 height: 30px;
  padding-left: 5px;
  padding: 7px 0px 0px 5px;
  font-size: 16px;
  cursor:pointer;
  :hover {
    background-color: ${(props) => props.theme.primaryColor};
    color: white;
  }`
export const CaretIcon  = styled.i`
    position: absolute;
    bottom:10%;
    right:1%;
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
export const IngredientsWrapper = styled.div`
    display:flex;
    background-color:#f8f8f8;
    margin-top:2%;
    i{
        display: inline-block;
    font-size: 16px;
    color: #a0a0a0;
    background-color: #eee;
    margin: 17px 15px;
    padding: 13px 12px;
    }
`
export const ButtonStyle = styled.button`
    background-color: #8dc63f;
    padding:10px;
    height: auto;
    border: none;
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
    outline:none;
    margin-right: 10px;
    font-size:14px;
    font-family:open sans, helveticaneue;
    margin-top:10px;
`
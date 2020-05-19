import styled from 'styled-components';
export const SubcribeBtn = styled.button`
    background:${(props)=> props.theme.primaryColor};
    padding: 11px 12px;
    width: 33%;
    color: #fff;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
    cursor:pointer;
` 
export const SubcribeContainer = styled.div`

  width: 100%;
  height: max-content;
  display: flex;
  border: 1px solid #474747;
  margin-bottom: 20px;
  input {
    width: 67%;
    outline: none;
    padding: 13px;
    font-family: inherit;
    font-weight: 600;
    color: gray;
    border-right: none;
    border: none;
    background-color:#3a3a3a;
  }`
  export const FooterComponent = styled.div`
  margin:0px 10px;
  width: ${(props) => (props.width)};
    h3{
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        background-color: #333;
        text-transform: none;
        margin-right: 15px;
    }
    p{
        color: #b8b8b8;
        font-size:14px;
        font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
    }

`
export const FooterLinks = styled.ul`
    li{
        padding: 2px 0px;
        font-size:14px;
        font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
    }
    li:before{
        font-family: fontawesome;
        font-size: 12px;
        content: "";
        color: rgb(255, 255, 255);
        padding: 0px 7px 0px 0px;
    }
`
export const Link = styled.a`
    color: #b8b8b8;
    text-decoration: none;
    outline: 0;
`
export const Line  =styled.div`
    width: 69%;
    height: 1px;
    background: #484848;
    margin-top: 5px;
`
export const FooterHeader = styled.div`
    display:flex;
    align-items:center;
`
export const CopyRightContainer =  styled.div`
    color: #b0b0b0;
    padding: 10px;
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
    font-size:16px;
    a{
        text-decoration:none;
        color:#b0b0b0;
        font-weight: 600;
    }
`
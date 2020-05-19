import styled from 'styled-components';

export const ThemingContainer = styled.div`
    position: fixed;
    top: 15%;
    color:#fff;
    transition: left 0.5s ease-out;
    left :${(props) => props.toggleSetting};  
    z-index:1;
`
export const SettingIcon = styled.div`
    display:flex;
    align-items:center;
    background: #505050;
    padding: 8px 15px;
    h2{
        color:#fff;
        margin: 0;
        font-weight: 700;
        font-size: 14px;
        width:200px;
        line-height: 30px;
    }
    i{
        font-size:24px;
        color: #fff;
    }  
    
`
export const Theming = styled.div`
    width:180px;
    background-color:#606060;
    padding:10px 15px;
    h3{
        color:#fff;
        margin:0px;
        font-weight: 600;
        font-size: 13px;
        line-height: 34px;
    }

`
export const ColorsContainer = styled.div`
    display:flex;
    align-items:center;
    flex-wrap: wrap;
`
export const ThemeColor = styled.div`
    padding:6.5px;
    background-color : ${(props) => props.Color};
    margin: 5px 5px 0px 0px;
    border: ${(props) =>(props.active ? "2px solid #fff" : "2px solid transparent")}
`
export const ResetButton = styled.button`
    padding: 10px;
    font-weight: 700;
    font-size: 13px;
    color: #fff;
    border: none;
    background-color:${(props) => props.theme.primaryColor} ;
    margin-top: 12px;
    text-transform:uppercase;
    font-family:inherit;
    outline:none;
`
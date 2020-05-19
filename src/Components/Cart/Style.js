import styled from 'styled-components';

export const HeadLine = styled.h4`
    font-size: 20px;
    float: left;
    margin-right: 10px;
    margin-top:0px;
`
export const CartHeader = styled.div`
    display:flex;
    align-items: center;
`
export const Quantity = styled.div`
    font-size: 14px;
    color: #888;
`
export const CartImage = styled.img`
    float: left;
    width: 70px;
    height: 70px;
`
export const ProductTitle = styled.div`
    float: left;
    margin-left: 10px;
    font-size: 14px;

    a{
        color: #606060;
        font-size: 14px;
        font-weight: 600;
    }
    span{
        font-weight: 600;
        color: #909090;
    }
`
export const ProductList = styled.div`
    overflow: auto;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;
`
export const CartContainer = styled.div`
    background-color: rgb(248, 248, 248);
    padding: 20px;
`
export const SubTotal=  styled.p`
    font-weight: 600;
    color: #707070;
    font-size: 14px;
    span{
        color: #909090;
        margin-left:3px;
    }
`
export const CartButton = styled.button`
    width: 100%;
    text-align: center;
    padding: 11px;
    color: #fff;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    margin-bottom: ${props => props.Checkout ? "0px" : "10px"};
    background-color : ${props => props.Checkout  ? props.theme.primaryColor : "#a0a0a0"};
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;

`
export const CartEmpty = styled.p`
    color:${(props) => props.theme.primaryColor};
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`
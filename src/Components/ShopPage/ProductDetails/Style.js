import styled from 'styled-components';

export const ImageContainer = styled.img`
    width: 48%;
    height: 397px;
`
export const DetailsContainer = styled.div`
    margin-left:30px;
    width:52%;
`
export const ProductPrice = styled.div`
    color: #888;
    font-weight: 500;
    font-size: 22px;
`
export const ProductDescription = styled.p`
    padding: 20px 0px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    color: gray;
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
    font-size:14px;
    line-height: 24px;
`
export const CartValue = styled.div`
    background-color: #f8f8f8 ;
    display: flex;
    align-items: center;
    width:27%;
`
export const CartIncre = styled.i`
    padding: 12px 14px;
    color: #fff;
    background-color: silver;
    &:hover{
        background-color: ${(props)=> props.theme.primaryColor}; 
    }
`
export const Quantity  = styled.input`
    max-width: 30%;
    border: 1px solid #f8f8f8;
    padding: 12px 2px;
    background-color: #f8f8f8;
    outline: none;
    color: #909090;
    text-align: center;
`
export const AddToCartContainer = styled.div`
    background-color: ${(props)=> props.theme.primaryColor};
    color:#fff;
    margin-left:10px;
    display: flex;
    i{
        padding: 12px;
        background: rgba(0, 0, 0, 0.06);
    }
`
export const AddToCart = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 13px;
    outline: none;
    color: #fff;
    padding: 12px 18px;

`
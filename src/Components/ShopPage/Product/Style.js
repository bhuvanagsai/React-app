import styled from 'styled-components';

export const ProductContainer = styled.div`
    width: 75%;
    margin-left: 30px;
    display: flex;
    flex-wrap:wrap;
`
export const ProductImage= styled.div`
    height:213px;

`
export const Products = styled.div`
    width: calc(100% / 3 - 22px);
    margin:10px;
    background: #fff;
    position: relative;
`
export const ProductType = styled.div`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #aaa;
    text-align: center;
`
export const ProductName = styled.h5`
    text-align: center;
    color: #707070;
    font-size: 16px;
    line-height: 24px;
    font-family: open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif;
    margin: 5px 0;
`
export const ProductPrice = styled.div`
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #606060;
`
export const ProductCart = styled.div`
    width: 42px;
    height: 42px;
    background-color: #8dc63f;
    position: absolute;
    right: 0;
    opacity: ${(props) => (props.hover ? "1" : "0")};
    transition:color 0.2s ease-in-out;
    bottom : ${(props) => (props.hover ? "30%" : "16%")};
`
export const CartIcon = styled.i`
    margin:13px;
    color: #fff;
`

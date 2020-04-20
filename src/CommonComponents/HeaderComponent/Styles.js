import styled from 'styled-components';

export const NavBar = styled.li`
  font-weight: 600;
  font-size: 14px;
  border-bottom: 3px solid transparent;
  padding: 25px 20px;
  position: relative;
`;
export const NavigationLink = styled.a`
    text-decoration: none;
    color: #707070;
    position: relative;
  &:hover {
    color: #505050;
  }
`
export const HeaderNav = styled.ul`
  display: flex;
  margin: 0;
  width: 80%;
  align-items: center;
  justify-content: flex-end;
`;
export const Dropdown = styled.ul`
    border-top:3px solid #8dc63f;
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 150px;
    font-size:13px;
    display:${(props) => (props.hover? "block" : "none")};
    li{
      background-color: #333;
      padding:10px;
      border-bottom:1px solid #3a3a3a; 
      &:hover{
        background-color:#3a3a3a;
        color:#fff;
      }
    }
    li:last-child{
      border-bottom:none;
    }
`
export const NavLink = styled.a`
  text-decoration: none;
  color:#9c9c9c;
  &:hover{
    color:#fff !important;
  }
`
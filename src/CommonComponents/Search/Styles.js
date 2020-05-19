import styled from 'styled-components';
export const SideBar = styled.div`
  float: left;
  width: 24%;
  margin-left: 17px;
`;
export const SearchContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  border: 1px solid #e8e8e8;
  margin-bottom: 20px;
  input {
    border: none;
    width: 90%;
    outline: none;
    padding: 13px;
    font-family: inherit;
    font-weight: 600;
    color: gray;
  }
`;
export const SearchIcon = styled.div`
  background:${(props) => props.theme.primaryColor};
  padding: 11px 12px;
  width: 10%;
  color: #fff;
`;

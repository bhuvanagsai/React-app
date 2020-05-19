import  styled from 'styled-components';

export const SliderNavBar = styled.div`
  width: 209px;
  height: auto;
  border-left: 1px solid #e3e3e3;
  padding: 16px 15px;
  font-size: 14px;
  font-weight: 650;
  color: ${(props) => (props.active ? "#fff" : "gray")};
  background:${(props) => (props.active ? props.theme.primaryColor : "#f2f2f2")};
`;
export const SliderContent = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
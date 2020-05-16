import styled from 'styled-components';
export const AuthorImageContainer = styled.img`
  float: right;
  border-radius: 50%;
  width: 33%;
`;
export const AuthorContact = styled.div`
  border: 1px solid #e8e8e8;
  padding: 25px;
  overflow: auto;
  a {
    color: #a0a0a0;
    text-decoration: none;
    &:hover {
      color: #8dc63f;
    }
  }
  p {
    color: gray;
    font-size: 14px;
    line-height: 24px;
  }
`;
export const AuthorDetails = styled.div`
  width: 60%;
  float: left;
`;
export const AuthorInfo = styled.div`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;
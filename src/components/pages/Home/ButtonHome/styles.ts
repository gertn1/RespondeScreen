import styled from 'styled-components';
import { media } from '../../../../theme/styles/media';

export const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
  width: 300px;
  height: 50px;
  

  &:hover {
    background-color: #0056b3;
  }

  @media ${media.tablet} { 
    padding: 8px 16px;
    font-size: 1.3rem;
     width: 200px;
     height: 50px;
      background-color: red;
  }

  @media ${media.phone} { 
    padding: 6px 12px;
    font-size: 16px;
     width: 150px;
     height: 50px;
      background-color: green;
  }
`;
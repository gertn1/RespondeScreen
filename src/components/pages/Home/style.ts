import styled from 'styled-components';
import { media } from '../../../theme/styles/media';



export const HomeContainer = styled.div<{ isOpen: boolean }>`
  padding: 30px;
  transition: margin-left 0.3s ease;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
  

  @media ${media.tablet} {
   margin-left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
    padding: 20px;
    margin-left: 0;
  }

  @media ${media.phone}
    margin-left: 0;
    padding: 10px;
  }
`;


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

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  font-size: 1rem;
  font-family:Arial;
  
  // th-Cabeçalho de cada coluna
  //td-Célula da tabela

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
     background-color:  #282c34;
  }

  @media ${media.tablet} { 
    th, td {
      padding: 8px;
      font-size: 1.2rem;
    }
  }
   @media ${media.phone}{ 
    th, td {
      padding: 6px;
      font-size: 1.2rem;
    }

    thead {
      display: none;
    }

    tr {
      display: block;
      margin-bottom: 10px;
      border: 1px solid #ccc;
    }

    td {
      display: block;
      text-align: right;
      padding-left: 50%;
      position: relative;
      border: none;
      padding: 10px 5px;
    }

    td::before {
      content: attr(data-label);
      position: absolute;
      left: 10px;
      width: 50%;
      white-space: nowrap;
      text-align: left;
      font-weight: bold;
    }
  }
`;


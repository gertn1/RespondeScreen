import styled from 'styled-components';
import { media } from '../../../../theme/styles/media';


export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  font-size: 1rem;
  font-family:Arial;
  
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



import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ItemsContainer = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    align-items: center;
    padding: 10px 20px;
    margin:3px; 

    &:hover {
    background-color: #575757;
    } 
`;

export const Label = styled.span<{ isopen: boolean }>`
  display: ${(props) => (props.isopen ? 'inline' : 'none')};
`;

export const IconWrapper = styled.span`
  display: flex;
  margin-right: 5px;
  
`;


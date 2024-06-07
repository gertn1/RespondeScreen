
import styled from 'styled-components';

export const ItemsContainer = styled.a<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  margin:3px;

  &:hover {
    background-color: #575757;
  }
`;

export const Label = styled.span<{ isOpen: boolean }>`
  margin-right: ${(props) => (props.isOpen ? '10px' : '0')};
  display: ${(props) => (props.isOpen ? 'inline' : 'none')};
`;

export const IconWrapper = styled.span`
  display: flex;
  margin-right: 5px;
  
`;


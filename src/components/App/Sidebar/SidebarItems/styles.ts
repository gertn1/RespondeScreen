
import styled from 'styled-components';

export const ItemsContainer = styled.a`

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    align-items: center;
    padding: 10px 20px;
    margin:3px;
  }

  &:hover {
    background-color: #575757;
  }
`;

export const SidebarItemContainer = styled.div<{ isOpen: boolean }>`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }

  i {
    margin-right: ${props => (props.isOpen ? "8px" : "0")};
  }

  span {
    display: ${props => (props.isOpen ? "inline" : "none")};
  }
`;
export const Label = styled.span<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'inline' : 'none')};
`;

export const IconWrapper = styled.span`
  display: flex;
  margin-right: 5px;
  
`;


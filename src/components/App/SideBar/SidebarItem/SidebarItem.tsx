import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #555;
  }

  svg {
    margin-right: ${props => props.isOpen ? '10px' : '0'};
    transition: margin-right 0.3s;
  }
`;

interface SidebarItemProps extends NavLinkProps {
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ isOpen, ...props }) => {
  return <StyledNavLink {...props} isOpen={isOpen} />;
};

export default SidebarItem;

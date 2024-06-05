
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${props => props.isOpen ? '250px' : '0'};
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.3s ease;
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    width: ${props => props.isOpen ? '200px' : '0'};
  }
`;

const MenuButton = styled(IoMenu)`
  font-size: 24px;
  color: white;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const SidebarLink = styled(NavLink)`
  display: block;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  &:hover {
    background-color: #555;
  }
`;

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <MenuButton onClick={toggleSidebar} />
      <SidebarLink to="/">Home</SidebarLink>
      <SidebarLink to="/about">About</SidebarLink>
      <SidebarLink to="/services">Services</SidebarLink>
      <SidebarLink to="/contact">Contact</SidebarLink>
    </SidebarContainer>
  );
};

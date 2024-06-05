
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { menuItems } from './Menusidebar/MenuItensSidebar'; 

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void; 
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? '250px' : '60px')};
  height: 100vh;
  transition: width 0.3s;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282c34;
  color: white;
`;

const HamburgerButton = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: left;
`;

const SidebarMenuItems = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #444;
  }
`;


export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <HamburgerButton onClick={toggleSidebar}>
        <IonIcon icon={menuOutline} style={{ fontSize: '30px', color: 'white' }} />
      </HamburgerButton>
      {menuItems.map(({ icon, label, url }) => (
        <SidebarMenuItems key={label}>
          <SidebarItem to={url}>
            <IonIcon icon={icon} style={{ marginRight: isOpen ? '10px' : '0px' }} />
            {isOpen && <span>{label}</span>}
          </SidebarItem>
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};

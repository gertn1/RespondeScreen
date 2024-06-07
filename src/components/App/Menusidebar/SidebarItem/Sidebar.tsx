
import React from 'react';
import styled from 'styled-components';
import { menuItems } from '../../NewSidebar/MenuSidebar/ItensSidebar';
import { IonIcon } from '@ionic/react';
import SidebarItem from './SidebarItem/SidebarItem';  

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? '250px' : '60px')};
  height: 100vh;
  transition: width 0.3s;
  overflow-x: hidden;
  position: fixed;
  top: 0px;
  left: 0;
  background-color: #282c34;
  color: white;
  padding-top: 50px;

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? '180px' : '0')};
  }
`;

const SidebarMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; 
  }
`;

export const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {menuItems.map(({ label, url, icon }) => (
        <SidebarMenuItems key={label}>
          <SidebarItem to={url} isOpen={isOpen}>
            <IonIcon icon={icon} />
            {isOpen && <span style={{ marginLeft: '10px' }}>{label}</span>}
          </SidebarItem>
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};


import React from 'react';
import { menuItems } from '../MenuSidebar/ItensSidebar';
import SidebarItems from '../SidebarItems/SidebarItems'
import { SidebarProps } from '../../../../@types/SidebarProps/SidebarProps';
import { SidebarContainer, SidebarMenuItems } from './styles';


export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {menuItems.map(({ label, url, icon }) => (
        <SidebarMenuItems key={label}>
          <SidebarItems label={label} icon={icon} url={url} isOpen={isOpen} />
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};

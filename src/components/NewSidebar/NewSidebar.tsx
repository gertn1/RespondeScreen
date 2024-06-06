
import React from 'react';
import { menuItems } from './MenuItensSidebar';
import Item from './Item';
import { SidebarProps } from '../../@types/Sidebar/SidebarProps';
import { SidebarContainer, SidebarMenuItems } from './styles';


export const NewSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {menuItems.map(({ label, url, icon }) => (
        <SidebarMenuItems key={label}>
          <Item label={label} icon={icon} url={url} isOpen={isOpen} />
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};

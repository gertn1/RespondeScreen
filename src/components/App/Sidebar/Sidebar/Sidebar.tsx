import React from "react";
import { menuItems } from "../MenuSidebar/ItensSidebar";
import SidebarItems from "../SidebarItems/SidebarItems";
import SidebarIcon from "../SidebarIcon/SidebarIcon";
import { SidebarProps } from "../../../../@types/SidebarProps/SidebarProps";
import { SidebarContainer, SidebarMenuItems } from "./styles";

export const Sidebar: React.FC<SidebarProps> = ({ isopen, toggleSidebar }) => {
  return (
    <SidebarContainer $isopen={isopen}>
      <SidebarIcon isopen={isopen} toggleSidebar={toggleSidebar} />
      {menuItems.map(({ label, url, icon }) => (
        <SidebarMenuItems key={url}>
          <SidebarItems label={label} icon={icon} url={url} isopen={isopen} />
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};

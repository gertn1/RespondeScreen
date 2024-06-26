import { FC } from "react";
import { menuItems } from "../MenuSidebar/ItensSidebar";
import SidebarItems from "../SidebarItems/SidebarItems";
import SidebarIcon from "../SidebarIcon/SidebarIcon";
import { SidebarProps } from "../../../../@types/SidebarProps/SidebarProps";
import { SidebarContainer, SidebarMenuItems } from "./styles";

export const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer $isOpen={isOpen}>
      <SidebarIcon isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {menuItems.map(({ label, url, icon }) => (
        <SidebarMenuItems key={url}>
          <SidebarItems label={label} icon={icon} url={url} isOpen={isOpen} />
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};

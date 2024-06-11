
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { IconWrapper } from './styles';
import { SidebarIconProps } from '../../../../@types/SidebarProps/SidebarIconProps';



const SidebarIcon: React.FC<SidebarIconProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <IconWrapper isOpen={isOpen} onClick={toggleSidebar}>  
      <IoArrowForward style={{ fontSize: '30px', color: 'white' }} />
    </IconWrapper>
  );
};

export default SidebarIcon;


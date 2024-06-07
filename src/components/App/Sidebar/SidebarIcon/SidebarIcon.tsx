
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { IconWrapper } from './styles';

interface SidebarIconProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}


export const SidebarIcon: React.FC<SidebarIconProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <IconWrapper isOpen={isOpen} onClick={toggleSidebar}>
      <IoArrowForward style={{ fontSize: '30px', color: 'white' }} />
    </IconWrapper>
  );
};

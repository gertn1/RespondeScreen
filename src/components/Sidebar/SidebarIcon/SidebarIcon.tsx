
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';
import { IconWrapper } from './styles';

interface FloatingIconProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}


export const FloatingIcon: React.FC<FloatingIconProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <IconWrapper isOpen={isOpen} onClick={toggleSidebar}>
      <IoArrowForward style={{ fontSize: '30px', color: 'white' }} />
    </IconWrapper>
  );
};


import React from 'react';
import { IconProps } from '../../@types/SidebarProps/IconProps';
import { StyledIonIcon } from './styles';


const Icon: React.FC<IconProps> = ({ icon, isOpen }) => {
  return <StyledIonIcon icon={icon} isOpen={isOpen} />;
};

export default Icon;

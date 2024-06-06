
import React from 'react';
import { LabelProps } from '../../@types/SidebarProps/LabelProps';
import { StyledLabel } from './styles';

const Label: React.FC<LabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;

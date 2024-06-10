
import React from 'react';
import { StyledButton  } from './styles';
import { ButtonProps } from '../../../../@types/HomeProps/ButtonProps';

const ButtonHome: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default ButtonHome;

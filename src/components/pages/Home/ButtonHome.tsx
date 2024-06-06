
import React from 'react';
import { StyledButton  } from './style';
import { ButtonProps } from '../../../@types/HomeProps/ButtonProps';

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;

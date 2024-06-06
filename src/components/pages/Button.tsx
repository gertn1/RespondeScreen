
import React from 'react';
import styled from 'styled-components';
import { media } from '../../theme/styles/media';

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  @media ${media.tablet} { /* Tablet */
    padding: 8px 16px;
    font-size: 14px;
  }

  @media ${media.phone} { /* Phone */
    padding: 6px 12px;
    font-size: 12px;
  }
`;

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;

import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.span`
  margin-left: 10px;
`;

interface LabelProps {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;

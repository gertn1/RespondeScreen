
import React from 'react';
// import styled from 'styled-components';
// import { media } from '../../theme/styles/media';
import { LabelProps } from '../../@types/Sidebar/LabelProps';


// const StyledLabel = styled.span`
//   margin-left: 10px;
//   font-size: 1.7rem;

//   @media ${media.tablet} {
//     font-size: 1.5rem;
//   }

//   @media ${media.phone} {
//     font-size: 1.2rem;
//   }
// `;

const Label: React.FC<LabelProps> = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default Label;

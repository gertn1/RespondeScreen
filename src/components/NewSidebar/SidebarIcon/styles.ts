
import styled from 'styled-components';
import { media } from '../../../theme/styles/media';

export const IconWrapper = styled.div<{ isOpen: boolean }>`
  left: ${props => props.isOpen ? '225px' : '37px'};
  position: fixed;
  display: block;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1001;
  padding: 10px;
  transition: left 0.18s ease-in-out;

  @media ${media.tablet} {
    left: ${props => props.isOpen ? '230px' : '-20px'};
  }

  @media ${media.phone} {
    left: ${props => props.isOpen ? '180px' : '-20px'};
  }
`;
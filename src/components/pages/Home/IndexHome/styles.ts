import styled from 'styled-components';
import { media } from '../../../../theme/styles/media';



export const HomeContainer = styled.div<{ isOpen: boolean }>`
  padding: 30px;
  transition: margin-left 0.3s ease;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
  

  @media ${media.tablet} {
   margin-left: ${({ isOpen }) => (isOpen ? '250px' : '0')};
    padding: 20px;
    margin-left: 0;

  }

  @media ${media.phone} {
    margin-left: 0;
    padding: 10px;
  }
`;




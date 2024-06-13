import styled from 'styled-components';
import { media } from '../../../../theme/styles/media';

export const HomeContainer = styled.div<{ $isopen: boolean }>`
  padding: 30px;
  transition: margin-left 0.3s ease;
  margin-left: ${({ $isopen }) => ($isopen ? '250px' : '60px')};
  
  @media ${media.tablet} {
    margin-left: ${({ $isopen }) => ($isopen ? '250px' : '0')};
    padding: 20px;
  }

  @media ${media.phone} {
    margin-left: 0;
    padding: 10px;
  }
`;

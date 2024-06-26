import styled from 'styled-components';
import { media } from '../../../../theme/styles/media';

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: ${(props) => (props.$isOpen ? '250px' : '60px')};
  height: 100vh;
  transition: width 0.3s;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282c34;
  color: white;
  padding-top: 50px;
  
  
 
  @media ${media.tablet} {
    width: ${(props) => (props.$isOpen ? '255px' : '0')};
    z-index: 1001;
    
  }

  @media ${media.phone} {
    width: ${(props) => (props.$isOpen ? '200px' : '0')};
    z-index: 1001;
      
  }
`;

export const SidebarMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;


  @media ${media.tablet} {
    font-size: 1.3rem;
  }

  @media ${media.phone} {
    font-size: 1.1rem;
  }
`;

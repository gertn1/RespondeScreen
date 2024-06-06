


import styled from 'styled-components';
import { media } from '../../theme/styles/media';
import { IonIcon } from '@ionic/react';

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? '250px' : '60px')};
  height: 100vh;
  transition: width 0.3s;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282c34;
  color: white;
  padding-top: 50px;
  z-index: 1000;

  @media ${media.tablet} {
    width: ${(props) => (props.isOpen ? '255px' : '0')};
  }

  @media ${media.phone} {
    width: ${(props) => (props.isOpen ? '200px' : '0')};
  }
`;

export const SidebarMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;

  @media ${media.tablet} {
    font-size: 1.5rem;
  }

  @media ${media.phone} {
    font-size: 1.2rem;
  }
`;


export const StyledIonIcon = styled(IonIcon)<{ isOpen: boolean }>`
  margin-right: ${(props) => (props.isOpen ? '5px' : '0px')};
  transition: margin-right 0.3s;
  font-size: 1.8rem;

  @media ${media.tablet} {
    font-size: 1.5rem;
    margin-right: ${(props) => (props.isOpen ? '5px' : '0')};
  }
  @media ${media.phone} {
    font-size: 1rem;
    margin-right: ${(props) => (props.isOpen ? '0' : '0')};
  }
`;



export const ItemContainer = styled.a<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #575757;
  }
`;
// export const Label = styled.span<{ isOpen: boolean }>`
//   margin-right: ${(props) => (props.isOpen ? '10px' : '0')};
//   display: ${(props) => (props.isOpen ? 'inline' : 'none')};
// `;


export const StyledLabel = styled.span<{ isOpen: boolean }>`
  margin-right: ${(props) => (props.isOpen ? '10px' : '0')};
  display: ${(props) => (props.isOpen ? 'inline' : 'none')};
`;

export const IconWrapper = styled.span`
  display: flex;
`;
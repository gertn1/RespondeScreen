// import React from 'react';
// import styled from 'styled-components';
// import { menuItems } from '../App/SideBar/Menusidebar/MenuItensSidebar';
// import Item from './Item'
// import { SidebarProps } from '../../@types/NewSidebar/SidebarProps';
// import { media } from '../../theme/styles/media';


// const SidebarContainer = styled.div<{ isOpen: boolean }>`
//   width: ${(props) => (props.isOpen ? '250px' : '60px')};
//   height: 100vh;
//   transition: width 0.3s;
//   overflow-x: hidden;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: #282c34;
//   color: white;
//   padding-top: 50px;

//   @media ${media.tablet} {
//     width: ${(props) => (props.isOpen ? '250px' : '0')};
//   }
// `;

// const SidebarMenuItems = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: 1.3rem;

//   @media ${media.tablet} {
//     font-size: 1.2rem; 
 
// `;

// export const NewSidebar: React.FC<SidebarProps> = ({ isOpen }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       {menuItems.map(({ label, url, icon }) => (
//         <SidebarMenuItems key={label}>
//           <Item url={url} icon={icon} label={label} isOpen={isOpen} />
//         </SidebarMenuItems>
//       ))}
//     </SidebarContainer>
//   );
// };


import React from 'react';
import styled from 'styled-components';
import { menuItems } from './MenuItensSidebar';
import Item from './Item';
import { SidebarProps } from '../../@types/NewSidebar/SidebarProps';
import { media } from '../../theme/styles/media';

const SidebarContainer = styled.div<{ isOpen: boolean }>`
 width: ${(props) => (props.isOpen ? '250px' : '60px')};
  height: 100vh;
  transition: width 0.3s;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: red;
  color: white;
  padding-top: 50px;

  @media ${media.tablet} {
    width: ${(props) => (props.isOpen ? '230px' : '0')};
  }

  @media ${media.phone} {
    width: ${(props) => (props.isOpen ? '200px' : '0')};
  }
`;

const SidebarMenuItems = styled.div`
  @media ${media.phone} {
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
  }

  @media ${media.tablet} {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
  }

  @media ${media.desktop} {
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
  }
`;

export const NewSidebar: React.FC<SidebarProps> = ({ isOpen}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {menuItems.map(({ label, url, icon }) => (
        <SidebarMenuItems key={label}>
          <Item url={url} icon={icon} label={label} isOpen={isOpen} />
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};

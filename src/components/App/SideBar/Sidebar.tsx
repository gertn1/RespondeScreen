

// // import React from 'react';
// // import { NavLink } from 'react-router-dom';
// // import styled from 'styled-components';
// // import { menuItems } from './Menusidebar/MenuItensSidebar'; 


// // // Definição de styled-components para o container do Sidebar
// // const SidebarContainer = styled.div<{ isOpen: boolean }>`
// //   width: ${(props) => (props.isOpen ? '250px' : '60px')};  // A largura é dinâmica com base na prop isOpen
// //   height: 100vh;
// //   transition: width 0.3s;
// //   overflow-x: hidden;
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   background-color: #282c34;
// //   color: white;
// // `;

// // const SidebarMenuItems = styled.div`
// //   display: flex;
// //   flex-direction: column;
// // `;

// // const SidebarItem = styled(NavLink)`
// //   display: flex;
// //   align-items: center;
// //   padding: 10px 20px;
// //   text-decoration: none;
// //   color: white;

// //   &:hover {
// //     background-color: #555;
// //   }
// // `;




// // export const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({ isOpen }) => {
// //   return (
// //     <SidebarContainer isOpen={isOpen}>
// //       {menuItems.map(({ label, url }) => (
// //         <SidebarMenuItems key={label}>
// //           <SidebarItem to={url}>
// //             {isOpen && <span>{label}</span>} 
// //           </SidebarItem>
// //         </SidebarMenuItems>
// //       ))}
// //     </SidebarContainer>
// //   );
// // };


// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import { menuItems } from './Menusidebar/MenuItensSidebar';
// import { IonIcon } from '@ionic/react';  // Certifique-se de que está importando o componente correto para os ícones

// // Definição de styled-components para o container do Sidebar
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
// `;

// const SidebarMenuItems = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const SidebarItem = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   padding: 10px 20px;
//   text-decoration: none;
//   color: white;

//   &:hover {
//     background-color: #555;
//   }

//   svg {
//     margin-right: ${props => props.isOpen ? '10px' : '0'};
//     transition: margin-right 0.3s;
//   }
// `;

// export const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({ isOpen }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       {menuItems.map(({ label, url, icon }) => (
//         <SidebarMenuItems key={label}>
//           <SidebarItem to={url}>
//             <IonIcon icon={icon} />
//             {isOpen && <span>{label}</span>}
//           </SidebarItem>
//         </SidebarMenuItems>
//       ))}
//     </SidebarContainer>
//   );
// };


import React from 'react';
import styled from 'styled-components';
import { menuItems } from './Menusidebar/MenuItensSidebar';
import { IonIcon } from '@ionic/react';
import SidebarItem from './SidebarItem/SidebarItem';  // Certifique-se de que o caminho está correto

// Definição de styled-components para o container do Sidebar
const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? '250px' : '60px')};
  height: 100vh;
  transition: width 0.3s;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282c34;
  color: white;
`;

const SidebarMenuItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {menuItems.map(({ label, url, icon }) => (
        <SidebarMenuItems key={label}>
          <SidebarItem to={url} isOpen={isOpen}>
            <IonIcon icon={icon} />
            {isOpen && <span>{label}</span>}
          </SidebarItem>
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};

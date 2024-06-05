
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import { IonIcon } from '@ionic/react';
// import { menuOutline } from 'ionicons/icons';
// import { menuItems } from './Menusidebar/MenuItensSidebar'; 

// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void; 
// }

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

// const HamburgerButton = styled.div`
//   padding: 15px;
//   cursor: pointer;
//   display: flex;
//   justify-content: left;
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
//     background-color: #444;
//   }
// `;


// export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <HamburgerButton onClick={toggleSidebar}>
//         <IonIcon icon={menuOutline} style={{ fontSize: '30px', color: 'white' }} />
//       </HamburgerButton>
//       {menuItems.map(({ icon, label, url }) => (
//         <SidebarMenuItems key={label}>
//           <SidebarItem to={url}>
//             <IonIcon icon={icon} style={{ marginRight: isOpen ? '10px' : '0px' }} />
//             {isOpen && <span>{label}</span>}
//           </SidebarItem>
//         </SidebarMenuItems>
//       ))}
//     </SidebarContainer>
//   );
// };


import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoResize } from 'react-icons/io5'; 
import { menuItems } from './Menusidebar/MenuItensSidebar'; 

// Definição de styled-components para o container do Sidebar
const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? '250px' : '60px')};  // A largura é dinâmica com base na prop isOpen
  height: 100vh;
  transition: width 0.3s;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #282c34;
  color: white;
`;

// Área de "toggle" que será usada para abrir e fechar o sidebar
// const ToggleArea = styled.div`
//   padding: 10px;
//   cursor: ew-resize; 
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   background-color: #444;
  
// `;

// const ToggleArea = styled.div`
//   padding: 10px;
//   cursor: ew-resize; // Cursor de redimensionamento horizontal
//   display: flex;
//   justify-content: flex-end; // Alinha o conteúdo à direita
//   align-items: center;
//   background-color: #444; // Cor para a área clicável
//   position: absolute;  // Posicionamento absoluto
//   bottom: 50%;  // Fixa na parte inferior do SidebarContainer
//   left: 0;
//   right: -10%;  // Estende-se ao longo da largura total do SidebarContainer
// `;

// Estilização dos itens do menu dentro do sidebar
const SidebarMenuItems = styled.div`
  display: flex;
  flex-direction: column;
`;

// Estilização dos itens de navegação individuais
const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #555;
  }
`;

// Componente Sidebar usando a prop isOpen e a função toggleSidebar
export const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({ isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      {menuItems.map(({ label, url }) => (
        <SidebarMenuItems key={label}>
          <SidebarItem to={url}>
            {isOpen && <span>{label}</span>} 
          </SidebarItem>
        </SidebarMenuItems>
      ))}
    </SidebarContainer>
  );
};

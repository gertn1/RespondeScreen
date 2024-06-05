
// import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';


// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// const SidebarContainer = styled.div<{ isOpen: boolean }>`
//   width: ${props => props.isOpen ? '250px' : '0'};
//   height: 100vh;
//   overflow-x: hidden;
//   transition: width 0.3s ease;
//   background-color: #282c34;
//   position: fixed;
//   top: 50px;
//   left: 0;
//   z-index: 1000;
//   padding-top: 50px; 
  

//   @media (max-width: 768px) {
//     width: ${props => props.isOpen ? '200px' : '0'};
//   }
// `;

// const SidebarLink = styled(NavLink)`
//   display: block;
//   color: white;
//   padding: 10px 20px;
//   text-decoration: none;
//   margin-botton:50px
  
 
//   &:hover {
//     background-color: #555;
   
//   }
// `;

// export const Sidebar = ({ isOpen }: SidebarProps) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       {/* <MenuButton onClick={toggleSidebar} /> */}
//       <SidebarLink to="/">Home</SidebarLink>
//       <SidebarLink to="/about">About</SidebarLink>
//       <SidebarLink to="/services">Services</SidebarLink>
//       <SidebarLink to="/contact">Contact</SidebarLink>
//     </SidebarContainer>
//   );
// };


import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfo, FaServicestack, FaPhone } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${props => props.isOpen ? '250px' : '0'};
  height: 100vh;
  overflow-x: hidden;
  transition: width 0.3s ease;
  background-color: #282c34;
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 1000;
  padding-top: 50px; 

  @media (max-width: 768px) {
    width: ${props => props.isOpen ? '200px' : '0'};
  }
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  margin-bottom: 10px;
  
  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: #555;
  }
`;

export const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLink to="/"><FaHome />Home</SidebarLink>
      <SidebarLink to="/about"><FaInfo />About</SidebarLink>
      <SidebarLink to="/services"><FaServicestack />Services</SidebarLink>
      <SidebarLink to="/contact"><FaPhone />Contact</SidebarLink>
    </SidebarContainer>
  );
};

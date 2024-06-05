// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import { IoHomeOutline, IoBusinessOutline, IoPeopleOutline, IoCashOutline, IoMenuOutline } from 'react-icons/io5';

// const menuItems = [
//   {
//     icon: IoHomeOutline,
//     label: 'INÍCIO',
//     url: '/',
//   },
//   {
//     icon: IoBusinessOutline,
//     label: 'ORGANIZAÇÕES',
//     url: '/organizations',
//   },
//   {
//     icon: IoPeopleOutline,
//     label: 'PARCEIROS',
//     url: '/partners',
//   },
//   {
//     icon: IoCashOutline,
//     label: 'CONTAS',
//     url: '/accounts',
//   },
// ];

// // Styled Components
// const SidebarContainer = styled.div<{ isOpen: boolean }>`
//   width: ${(props) => (props.isOpen ? '250px' : '60px')};
//   height: 100vh; // Updated for full height
//   transition: width 0.3s;
//   overflow-x: hidden;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: #f4f4f4; // Example color
// `;

// const HamburgerButton = styled.div`
//   padding: 10px;
//   cursor: pointer;
// `;

// const SidebarMenuItems = styled.div``;

// const SidebarItem = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   padding: 5px 10px;
//   text-decoration: none;
//   color: black; // Text color for visibility
//   &:hover {
//     background: #ccc;
//   }
//   &.active {
//     background: #ddd;
//   }
// `;

// const Icon = styled.div`
//   font-size: 20px; // Icon size
//   padding: 5px;
//   margin-right: 10px; // Space between icon and text
// `;

// const Span = styled.span`
//   font-size: 14px;
//   display: inline-block; // Ensure it aligns well
// `;

// export const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <HamburgerButton onClick={() => console.log('toggle sidebar')}>
//         <IoMenuOutline size="24" />
//       </HamburgerButton>
//       {menuItems.map(({ url, label, icon: IconComponent }) => (
//         <SidebarMenuitems key={url}>
//           <SidebarItem to={url}>
//             <Icon><IconComponent /></Icon>
//             <Span>{label}</Span>
//           </SidebarItem>
//         </SidebarMenuItems>
//       ))}
//     </SidebarContainer>
//   );
// };

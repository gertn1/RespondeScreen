// // import React from 'react';
// // import Link from './Links';
// // import Icon from './Icon';
// // import Label from './Label';

// // interface ItemProps {
// //   url: string;
// //   icon: string;
// //   label: string;
// //   isOpen: boolean;
// // }

// // const Item: React.FC<ItemProps> = ({ url, icon, label, isOpen }) => {
// //   return (
// //     <Link to={url}>
// //       <Icon icon={icon} isOpen={isOpen} />
// //       {isOpen && <Label>{label}</Label>}
// //     </Link>
// //   );
// // };

// // export default Item;


// import React from 'react';
// import styled from 'styled-components';

// interface ItemProps {
//   url: string;
//   icon: React.ReactNode;
//   label: string;
//   isOpen: boolean;
// }

// const ItemContainer = styled.a<{ isOpen: boolean }>`
//   display: flex;
//   align-items: center;
//   padding: 10px 20px;
//   text-decoration: none;
//   color: white;

//   &:hover {
//     background-color: #575757;
//   }
// `;

// const Label = styled.span<{ isOpen: boolean }>`
//   margin-right: ${(props) => (props.isOpen ? '10px' : '0')};
//   display: ${(props) => (props.isOpen ? 'inline' : 'none')};
// `;

// const Icon = styled.span`
//   display: flex;
// `;

// const Item: React.FC<ItemProps> = ({ url, icon, label, isOpen }) => (
//   <ItemContainer href={url} isOpen={isOpen}>
//     <Label isOpen={isOpen}>{label}</Label>
//     <Icon>{icon}</Icon>
//   </ItemContainer>
// );

// export default Item;

import React from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
// import { ItemProps } from './ItemProps'; 

interface ItemProps {
  url: string;
  icon: string;
  label: string;
  isOpen: boolean;
}

const ItemContainer = styled.a<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #575757;
  }
`;

const Label = styled.span<{ isOpen: boolean }>`
  margin-right: ${(props) => (props.isOpen ? '10px' : '0')};
  display: ${(props) => (props.isOpen ? 'inline' : 'none')};
`;

const IconWrapper = styled.span`
  display: flex;
`;

const Item: React.FC<ItemProps> = ({ url, icon, label, isOpen }) => (
  <ItemContainer href={url} isOpen={isOpen}>
     <Label isOpen={isOpen}>{label}</Label>
      <IconWrapper>
      <IonIcon icon={icon} />
    </IconWrapper>
  </ItemContainer>
);

export default Item;


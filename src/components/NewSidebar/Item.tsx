
import React from 'react';
import { IonIcon } from '@ionic/react';
import { ItemProps } from '../../@types/SidebarProps/ItemProps';
import { ItemContainer, Label ,IconWrapper  } from './styles';
 

const Item: React.FC<ItemProps> = ({ url, icon, label, isOpen }) => (
  <ItemContainer href={url} isOpen={isOpen}>
    <Label isOpen={isOpen}>{label}</Label>
      <IconWrapper>
      <IonIcon icon={icon} />
    </IconWrapper>
   
  </ItemContainer>
);

export default Item;


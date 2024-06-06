
import React from 'react';
import { IonIcon } from '@ionic/react';
import { ItemProps } from '../../@types/Sidebar/ItemProps';
import { ItemContainer, StyledLabel ,IconWrapper  } from './styles';
 

const Item: React.FC<ItemProps> = ({ url, icon, label, isOpen }) => (
  <ItemContainer href={url} isOpen={isOpen}>
     <StyledLabel isOpen={isOpen}>{label}</StyledLabel>
      <IconWrapper>
      <IonIcon icon={icon} />
    </IconWrapper>
  </ItemContainer>
);

export default Item;


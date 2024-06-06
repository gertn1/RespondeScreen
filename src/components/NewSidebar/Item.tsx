
import React from 'react';
import { IonIcon } from '@ionic/react';
import { ItemProps } from '../../@types/Sidebar/ItemProps';
import { ItemContainer, Label ,IconWrapper  } from './styles';
 

const Item: React.FC<ItemProps> = ({ url, icon, label, isOpen }) => (
  <ItemContainer href={url} isOpen={isOpen}>
    {/* Trocar icons de posicao  */}
      <IconWrapper>
      <IonIcon icon={icon} />
    </IconWrapper>
    <Label isOpen={isOpen}>{label}</Label>
  </ItemContainer>
);

export default Item;


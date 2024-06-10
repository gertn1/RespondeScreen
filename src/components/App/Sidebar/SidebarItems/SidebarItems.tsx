
import { FC } from 'react';
import { IonIcon } from '@ionic/react';
import { ItemsContainer, Label ,IconWrapper  } from './styles';
import { ItemsProps } from '../../../../@types/SidebarProps/ItemsProps';



const SidebarItems: FC<ItemsProps> = ({icon, label, isOpen }) => (
  <ItemsContainer >
      <IconWrapper>
      <IonIcon icon={icon} />
    </IconWrapper>
    <Label isOpen={isOpen}>{label}</Label>
  </ItemsContainer>
);

export default SidebarItems;


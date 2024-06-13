import { FC } from "react";
import { IonIcon } from "@ionic/react";
import { Label, IconWrapper, ItemsContainer } from "./styles";
import { ItemsProps } from "../../../../@types/SidebarProps/ItemsProps";

const SidebarItems: FC<ItemsProps> = ({ icon, label, url, isopen }) => {
  return (
    <ItemsContainer to={url}>
      <IconWrapper>
        <IonIcon icon={icon} />
      </IconWrapper>
      <Label $isopen={isopen}>{label}</Label>
    </ItemsContainer>
  );
};

export default SidebarItems;

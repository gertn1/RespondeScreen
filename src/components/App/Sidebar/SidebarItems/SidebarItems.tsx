import { FC } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { ItemsContainer, Label, IconWrapper } from "./styles";
import { ItemsProps } from "../../../../@types/SidebarProps/ItemsProps";

const SidebarItems: FC<ItemsProps> = ({ icon, label, url, isOpen }) => {
  return (
    <ItemsContainer>
      <Link to={url}>
        <IconWrapper>
          <IonIcon icon={icon} />
        </IconWrapper>
        <Label isOpen={isOpen}>{label}</Label>
      </Link>
    </ItemsContainer>
  );
};

export default SidebarItems;

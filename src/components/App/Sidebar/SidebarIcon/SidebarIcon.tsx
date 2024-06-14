import { FC } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import { IconWrapper } from "./styles";
import { SidebarIconProps } from "../../../../@types/SidebarProps/SidebarIconProps";

const SidebarIcon: FC<SidebarIconProps> = ({ isopen, toggleSidebar }) => {
  return (
    <IconWrapper $isopen={isopen} onClick={toggleSidebar}>
      {isopen ? (
        <IoArrowBack style={{ fontSize: "30px", color: "white" }} />
      ) : (
        <IoArrowForward style={{ fontSize: "30px", color: "white" }} />
      )}
    </IconWrapper>
  );
};

export default SidebarIcon;

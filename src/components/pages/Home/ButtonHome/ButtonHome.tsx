import { FC } from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "../../../../@types/HomeProps/ButtonProps";

const ButtonHome: FC<ButtonProps> = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default ButtonHome;

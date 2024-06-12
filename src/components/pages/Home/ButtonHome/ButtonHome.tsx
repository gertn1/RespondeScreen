import React from "react";
import { StyledButton } from "./styles";
import { ButtonProps } from "../../../../@types/HomeProps/ButtonProps";

const ButtonHome: React.FC<ButtonProps> = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default ButtonHome;

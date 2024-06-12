import React from "react";

import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledFieldSet,
  StyledFieldWrapper,
} from "./styles";
import ButtonHome from "../ButtonHome/ButtonHome";

const FormHome: React.FC = () => {
  return (
    <StyledForm>
      <StyledFieldSet>
        <StyledFieldWrapper>
          <StyledInput type="text" name="name" placeholder="Nome" />
          <StyledInput type="email" name="email" placeholder="Email" />
          <StyledInput type="tel" name="phone" placeholder="Telefone" />
          <StyledInput type="text" name="address" placeholder="Endereco" />
          <StyledInput type="text" name="city" placeholder="Cidade" />
          <StyledInput type="text" name="state" placeholder="Estado" />
        </StyledFieldWrapper>
      </StyledFieldSet>
      <StyledFieldSet>
        <StyledTextArea name="message" placeholder="Mensagem" />
      </StyledFieldSet>
      <ButtonHome label="Enviar" />
    </StyledForm>
  );
};

export default FormHome;

import React from "react";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledButton,
  StyledFieldSet,
  StyledLegend,
  StyledFieldWrapper,
} from "./styles";

const FormHome: React.FC = () => {
  return (
    <StyledForm>
      <StyledFieldSet>
        <StyledLegend>Informações Pessoais</StyledLegend>
        <StyledFieldWrapper>
          <label>
            Nome:
            <StyledInput type="text" name="name" />
          </label>
          <label>
            Email:
            <StyledInput type="email" name="email" />
          </label>
          <label>
            Telefone:
            <StyledInput type="tel" name="phone" />
          </label>
        </StyledFieldWrapper>
      </StyledFieldSet>
      <StyledFieldSet>
        <StyledLegend>Endereço</StyledLegend>
        <StyledFieldWrapper>
          <label>
            Endereço:
            <StyledInput type="text" name="address" />
          </label>
          <label>
            Cidade:
            <StyledInput type="text" name="city" />
          </label>
          <label>
            Estado:
            <StyledInput type="text" name="state" />
          </label>
        </StyledFieldWrapper>
      </StyledFieldSet>
      <StyledFieldSet>
        <StyledLegend>Mensagem</StyledLegend>
        <label>
          Mensagem:
          <StyledTextArea name="message" rows={5} />
        </label>
      </StyledFieldSet>
      <StyledButton type="submit">Enviar</StyledButton>
    </StyledForm>
  );
};

export default FormHome;

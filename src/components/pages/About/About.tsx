import { FC } from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
    color: red;
  }

  p {
    font-size: 18px;
  }
`;

const About: FC = () => {
  return (
    <AboutContainer>
      <h1>Pagina Sobre</h1>
      <p>Esta é pagina Sobre.</p>
    </AboutContainer>
  );
};

export default About;

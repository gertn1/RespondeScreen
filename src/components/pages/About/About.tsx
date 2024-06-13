import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 20px;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <h1>About Page</h1>
      <p>This is the about page of the application.</p>
    </AboutContainer>
  );
};

export default About;

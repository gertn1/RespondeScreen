import React from "react";
import ButtonHome from "../ButtonHome/ButtonHome";
import { HomeContainer } from "./styles";
import { HomeProps } from "../../../../@types/HomeProps/HomeProps";
import FormHome from "../FormHome/FormHome";

const Home: React.FC<HomeProps> = ({ isopen }) => {
  return (
    <HomeContainer isopen={isopen}>
      <h1>Home Page</h1>
      <ButtonHome label="Click Me" />
      <FormHome />
    </HomeContainer>
  );
};

export default Home;

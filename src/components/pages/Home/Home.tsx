
import React from 'react';
import Button from './ButtonHome/ButtonHome';
import Table from './TableHome';
import { data } from './DataHome/Data';
import { HomeContainer } from './style';
import { HomeProps } from '../../../@types/HomeProps/HomeProps';


const Home: React.FC<HomeProps> = ({ isOpen }) => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <HomeContainer isOpen={isOpen}>
      <h1>Home Page</h1>
      <Button onClick={handleClick} label="Click Me" />
      <Table data={data} />
    </HomeContainer>
  );
};

export default Home;

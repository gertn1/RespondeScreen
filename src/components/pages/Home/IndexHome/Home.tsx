
import React from 'react';
import ButtonHome from '../ButtonHome/ButtonHome';
import TableHome from '../TableHome/TableHome';
import { data } from '../DataHome/Data';
import { HomeContainer } from './styles';
import { HomeProps } from '../../../../@types/HomeProps/HomeProps';


const Home: React.FC<HomeProps> = ({ isOpen }) => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <HomeContainer isOpen={isOpen}>
      <h1>Home Page</h1>
      <ButtonHome onClick={handleClick} label="Click Me" />
      <TableHome data={data} />
    </HomeContainer>
  );
};

export default Home;

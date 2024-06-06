import  { FC } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

const Container = styled.div<ContainerProps>`
  flex: 1;
  margin-top: 57px;
  transition: margin-left 0.3s ease;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '50px')};
`;

const ContentContainer: FC<ContainerProps> = ({ isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <h1>Welcome to Our Site!</h1>
      <p>This is some example content.</p>
    </Container>
  );
};

export default ContentContainer;

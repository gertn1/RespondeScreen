
// Topo.tsx
import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';

interface TopoProps {
  toggleSidebar: () => void;
}

const TopBar = styled.div`
  background-color: #282c34;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const HamburgerButton = styled(IoMenu)`
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Logo = styled.div`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Topo = ({ toggleSidebar }: TopoProps) => {
  return (
    <TopBar>
      <HamburgerButton onClick={toggleSidebar} />
      <Logo>Your Logo Here</Logo>
    </TopBar>
  );
};

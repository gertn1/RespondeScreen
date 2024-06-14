import styled from "styled-components";

const TopBar = styled.div`
  background-color: #282c34;
  height: 60px;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Logo = styled.div`
  font-size: 24px;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Topo = () => {
  return (
    <TopBar>
      <Logo>Logo</Logo>
    </TopBar>
  );
};

// import React from 'react';
// import styled from 'styled-components';

// const StyledButton = styled.button`
//   padding: 10px 20px;
//   margin: 10px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// interface ButtonProps {
//   onClick: () => void;
//   label: string;
// }

// const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
//   return <StyledButton onClick={onClick}>{label}</StyledButton>;
// };

// export default Button;


import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) { /* Tablet */
    padding: 8px 16px;
    font-size: 14px;
  }

  @media (max-width: 480px) { /* Phone */
    padding: 6px 12px;
    font-size: 12px;
  }
`;

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;

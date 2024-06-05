import React from 'react';
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';

interface IconProps {
  icon: string;
  isOpen: boolean;
}

const StyledIonIcon = styled(IonIcon)<{ isOpen: boolean }>`
  margin-right: ${props => props.isOpen ? '10px' : '0'};
  transition: margin-right 0.3s;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    
  }
`;

const Icon: React.FC<IconProps> = ({ icon, isOpen }) => {
  return <StyledIonIcon icon={icon} isOpen={isOpen} />;
};

export default Icon;

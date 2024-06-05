
import styled from 'styled-components';
import { IonIcon } from '@ionic/react';
import { media } from '../../theme/styles/media';

interface IconProps {
  icon: string;
  isOpen: boolean;
}

const StyledIonIcon = styled(IonIcon)<{ isOpen: boolean }>`
  margin-right: ${props => props.isOpen ? '5px' : '0px'};
  transition: margin-right 0.3s;
  font-size: 1.8rem;

  @media ${media.tablet} {
    font-size: 1.5rem;
    margin-right: ${props => props.isOpen ? '5px' : '0'};
    
  }
  @media ${media.phone} {
    font-size: 1rem;
    margin-right: ${props => props.isOpen ? '0' : '0'};
    
  }
`;


const Icon: React.FC<IconProps> = ({ icon, isOpen }) => {
  return <StyledIonIcon icon={icon} isOpen={isOpen} />;
};

export default Icon;

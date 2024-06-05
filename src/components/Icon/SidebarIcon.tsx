
import styled from 'styled-components';
import { IoResize } from 'react-icons/io5';
import { media } from '../../theme/styles/media';


interface FloatingIconProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }

const IconWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: ${props => props.isOpen ? '225px' : '37px'};  
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1000;
  padding: 10px;
  transition: left 0.18s ease-in-out;

  @media ${media.tablet} {
    left: ${props => props.isOpen ? '200px' : '-20px'};
    transition: left 0.3s ease-in-out;
  }

  @media ${media.phone} {
    left: ${props => props.isOpen ? '180px' : '-20px'};
    transition: left 0.3s ease-in-out;
  }
`;
 
export const FloatingIcon: React.FC<FloatingIconProps> = ({ isOpen, toggleSidebar }) => {
    return (
      <IconWrapper isOpen={isOpen} onClick={toggleSidebar}>
        <IoResize style={{ fontSize: '30px', color: 'white' }} />
      </IconWrapper>
    );
  };
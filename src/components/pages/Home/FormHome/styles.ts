import styled from 'styled-components';
import { media } from '../../../../theme/styles/media';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;


  @media ${media.tablet} { 
    padding: 15px;
    overflow: hidden;
    /* max-width: 600px; */
  }

  @media ${media.phone} { 
    padding: 10px;
    /* overflow: auto; */

  }

`;

export const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;

  @media ${media.tablet} { 
    padding: 15px;
  }

  @media ${media.phone} { 
    padding: 10px;
  }
`;

export const StyledLegend = styled.legend`
  padding: 0 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;

  @media ${media.tablet} { 
    font-size: 1.1rem;
  }

  @media ${media.phone} { 
    font-size: 1rem;
  }
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media ${media.tablet} { 
    flex-direction: column;
    gap: 15px;
  }

  @media ${media.phone} { 
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  @media ${media.tablet} { 
    padding: 8px;
    font-size: 1.1rem;
  }

  @media ${media.phone} { 
    padding: 6px;
    font-size: 1rem;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  @media ${media.tablet} { 
    padding: 8px;
    font-size: 1.1rem;
  }

  @media ${media.phone} { 
    padding: 6px;
    font-size: 1rem;
  }
`;

export const StyledButton = styled.button`
  padding: 15px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #282c34;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }

  @media ${media.tablet} { 
    padding: 12px 16px;
    font-size: 1.1rem;
  }

  @media ${media.phone} { 
    padding: 10px 14px;
    font-size: 1rem;
  }
`;

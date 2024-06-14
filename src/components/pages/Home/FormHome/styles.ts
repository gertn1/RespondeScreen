import styled from 'styled-components';
import { media } from '../../../../theme/styles/media';

export const StyledForm = styled.form`
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #fff;

  @media ${media.tablet} { 
    padding: 15px;
    overflow: hidden;
  }
  @media ${media.phone} { 
    padding: 10px;
  }
`;

export const StyledFieldSet = styled.fieldset`
  border: 1px solid green;
  padding: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  color: pink;
 
  @media ${media.tablet} { 
    padding: 15px;
  }
  @media ${media.phone} { 
    padding: 10px;
  }
`;

export const StyledFieldWrapper = styled.div`
  display: flex;
  gap: 20px;
  background-color: red;
  padding: 10px;

  @media ${media.tablet} { 
  display: block;
  columns:2;
  gap: 15px;
  }

  @media ${media.phone} { 
    columns:1;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid red;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  @media ${media.tablet} { 
    padding: 8px;
    font-size: 1.1rem;
    width: 95%;
    align-self: center;
   
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

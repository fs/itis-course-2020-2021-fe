import styled from 'styled-components';

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 2px;
  border: 1px solid blue;
  padding: 4px 8px;

  :focus {
    border: 1px solid blue;
  }

  :disabled {
    border: 1px solid gray;
  }
`;

const Input = ({ ...props }) => <StyledInput {...props} />;

export default Input;

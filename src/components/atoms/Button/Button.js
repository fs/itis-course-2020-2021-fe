import styled from 'styled-components';

const StyledButton = styled.button(
  ({ primary }) => `
    color: ${primary ? 'white' : 'blue'};
    background-color: ${primary ? 'blue' : 'white'};
    font-size: 16px;
    border-radius: 2px;
    border: 1px solid blue;
    padding: 4px 8px;
    cursor: pointer;
`,
);

const Button = (props) => {
  const { primary, children } = props;
  return <StyledButton primary={primary}>{children}</StyledButton>;
};

export default Button;

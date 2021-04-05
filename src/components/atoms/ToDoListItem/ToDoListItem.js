import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledListItem = styled.li(
  ({ checked }) => `
  min-width: 300px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  
  span {
    text-decoration: ${checked ? 'line-through' : 'none'};
    color: ${checked ? 'grey' : 'inherit'};
  }
`,
);

const ToDoListItem = ({ checked, id, children }) => (
  <StyledListItem checked={checked}>
    <Link to={`tasks/${id}`}>{children}</Link>
  </StyledListItem>
);

export default ToDoListItem;

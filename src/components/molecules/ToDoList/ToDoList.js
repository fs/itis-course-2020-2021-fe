import styled from 'styled-components';
import CheckBox from '../../atoms/Checkbox';
import ToDoListItem from '../../atoms/ToDoListItem/ToDoListItem';

const List = styled.ul`
  list-style: none;
`;

const ToDoList = (props) => {
  const { list } = props;
  return (
    <List>
      {list.map((listItem) => (
        <ToDoListItem>
          <CheckBox />
          {listItem.text}
        </ToDoListItem>
      ))}
    </List>
  );
};

export default ToDoList;

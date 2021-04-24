import styled from 'styled-components';
import Task from '../Task';

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  
  li {
    :not(:last-child){
      margin-bottom: 2rem;
    }
  }
`;

const TasksList = ({ list }) => (
  <List>
    {list.map((task, index) => <li key={index}><Task todo={task} /></li> )}
  </List>
);

export default TasksList;

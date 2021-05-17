import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../atoms/Button';
import useRemoveTask from '../../../hooks/useRemoveTask';
import TaskEditForm from '../TaskEditForm';

const TaskCard = styled.div`
  padding: 10px 20px;
  border: 2px solid lightgray;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const Actions = styled.div`
  margin: 0 10px 0 auto;
  width: max-content;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
`;

const Edit = styled.button`
  margin-right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: underline;
`;

const Task = ({ todo }) => {
  const { title, id } = todo;
  const { removeTask } = useRemoveTask();

  const [isTaskEdited, setIsTaskEdited] = useState(false);

  // todo: return async (solve in test)
  const onRemove = () => {
    removeTask(id);
  };

  const onEditComplete = () => {
    setIsTaskEdited(false);
  };

  return (
    <TaskCard>
      <Actions>
        <Edit onClick={() => setIsTaskEdited(true)} data-testid="test-task-edit-button">
          Edit
        </Edit>
        <StyledButton error outlined={false} onClick={onRemove}>
          X
        </StyledButton>
      </Actions>

      {isTaskEdited ? (
        <TaskEditForm data-testid="test-task-edit-form" task={todo} onEditComplete={onEditComplete} />
      ) : (
        <Link to={`tasks/${id}`}>
          <Title>{title}</Title>
        </Link>
      )}
    </TaskCard>
  );
};

export default Task;

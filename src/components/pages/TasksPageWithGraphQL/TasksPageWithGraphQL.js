import styled from 'styled-components';
import DefaultTemplate from '../../templates/DefaultTemplate';
import ToDoList from '../../molecules/ToDoList';
import useTasks from '../../../hooks/useTasks';
import ToDoForm from '../../molecules/ToDoForm';
import useCreateTask from '../../../hooks/useCreateTask';
import useRemoveTask from '../../../hooks/useRemoveTask';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const TasksPageWithGraphQL = () => {
  const { tasks, loading } = useTasks();
  const {createTask} = useCreateTask();
  const {remove} = useRemoveTask();

  return (
    <DefaultTemplate loading={loading}>
      <Wrapper>
        <Title>ToDoPage with GraphQL</Title>
        <ToDoForm onSubmit={createTask} />
        <ToDoList list={tasks} onRemove={remove} />
      </Wrapper>
    </DefaultTemplate>
  );
};

export default TasksPageWithGraphQL;

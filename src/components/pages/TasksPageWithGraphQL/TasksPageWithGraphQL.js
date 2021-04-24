import styled from 'styled-components';
import DefaultTemplate from '../../templates/DefaultTemplate';
import useTasks from '../../../hooks/useTasks';
import ToDoForm from '../../molecules/ToDoForm';
import useCreateTask from '../../../hooks/useCreateTask';
import TasksList from '../../molecules/TasksList';

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
  const { createTask } = useCreateTask();

  const onAddTask = async (value) => {
    await createTask(value);
  };

  return (
    <DefaultTemplate loading={loading}>
      <Wrapper>
        <Title>ToDoPage with GraphQL</Title>
        <ToDoForm onSubmit={onAddTask} />
        <TasksList list={tasks} />
      </Wrapper>
    </DefaultTemplate>
  );
};

export default TasksPageWithGraphQL;

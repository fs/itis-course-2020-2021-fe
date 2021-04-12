import styled from 'styled-components';
import DefaultTemplate from '../../templates/DefaultTemplate';
import ToDoList from '../../molecules/ToDoList';
import useTasks from '../../../hooks/useTasks';

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

  return (
    <DefaultTemplate loading={loading}>
      <Wrapper>
        <Title>ToDoPage with GraphQL</Title>
        <ToDoList list={tasks} />
      </Wrapper>
    </DefaultTemplate>
  );
};

export default TasksPageWithGraphQL;

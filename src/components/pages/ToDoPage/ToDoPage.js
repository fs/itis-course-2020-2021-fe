import styled from 'styled-components';
import ToDoList from '../../molecules/ToDoList';
import ToDoForm from '../../molecules/ToDoForm';

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const list = [{ text: 'Поставить будильник на 7:00' }, { text: 'Позвтракать' }, { text: 'Не опаздать' }];

const ToDoPage = () => (
  <Wrapper>
    <Title>ToDoPage</Title>
    <ToDoList list={list} />
    <ToDoForm />
  </Wrapper>
);

export default ToDoPage;

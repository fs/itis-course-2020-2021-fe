import { useMutation } from '@apollo/client';
import createTaskMutation from '../graphql/mutations/createTask';
import getTasks from '../graphql/queries/getTasks';

const useCreateTask = () => {
  const [mutation, { data, error, loading }] = useMutation(createTaskMutation, {
    refetchQueries: [{ query: getTasks }],
  });

  const createTask = async title => {
    const variables = { input: { title } };
    await mutation({ variables });
  };

  return { createTask, data, error, loading };
};

export default useCreateTask;

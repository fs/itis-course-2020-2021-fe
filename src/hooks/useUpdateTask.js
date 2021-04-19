import { useMutation } from '@apollo/client';
import updateTaskMutation from '../graphql/mutations/updateTask';
import getTasks from '../graphql/queries/getTasks';

const useUpdateTask = () => {
  const [mutation, { data, error, loading }] = useMutation(updateTaskMutation, { refetchQueries: [{ query: getTasks }] });

  const updateTask = async ({ title, id }) => {
    const variables = { input: { title, id } };
    await mutation({ variables });
  };

  return { updateTask, data, error, loading };
};

export default useUpdateTask;

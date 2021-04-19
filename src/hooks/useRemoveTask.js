import { useMutation } from '@apollo/client';
import removeTaskMutation from '../graphql/mutations/removeTask';
import getTasks from '../graphql/queries/getTasks';

const useRemoveTask = () => {
  const [mutation, { data, error, loading }] = useMutation(removeTaskMutation, { refetchQueries: [{ query: getTasks }]});

  const removeTask = async (id) => {
    const variables = { input: { id } };
    await mutation({ variables });
  };

  return { removeTask, data, error, loading };
};

export default useRemoveTask;

import { useMutation } from '@apollo/client';
import getTasks from '../graphql/queries/getTasks';
import removeTask from '../graphql/mutations/removeTask';

const useRemoveTask = () => {
  const [mutation, { data, error, loading }] = useMutation(removeTask, {
    refetchQueries: [{ query: getTasks }],
  });

  const remove = async (id) => {
    await mutation({ variables: { input: { id } } });
  };

  return {
    remove,
    data,
    error,
    loading,
  };
};

export default useRemoveTask;

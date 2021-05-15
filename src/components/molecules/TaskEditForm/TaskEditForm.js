import { useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import useUpdateTask from '../../../hooks/useUpdateTask';

const TaskEditForm = ({ task, onEditComplete }) => {
  const { title, id } = task;
  const { updateTask } = useUpdateTask();

  const [taskValue, setTaskValue] = useState(title);

  const onSubmit = async (event) => {
    event.preventDefault();
    await updateTask({ title: taskValue, id });
    onEditComplete();
  };

  const onChange = (value) => {
    setTaskValue(value);
  };

  return (
    <form>
      <Input onChange={onChange} value={taskValue} />
      <Button type="submit" onClick={onSubmit}>
        Save
      </Button>
      <Button onClick={onEditComplete}>Cancel</Button>
    </form>
  );
};

export default TaskEditForm;

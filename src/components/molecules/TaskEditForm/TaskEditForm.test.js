import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskEditForm from './TaskEditForm';
import useUpdateTask from '../../../hooks/useUpdateTask';

jest.mock('../../../hooks/useUpdateTask');
describe('EditTaskForm', () => {
  test('should call onEditComplete on cancel', () => {
    // Arrange
    const mockOnEditComplete = jest.fn();
    const mockTask = {
      title: 'test',
      id: 1,
    };
    const mockUseUpdateTask = {
      updateTask: jest.fn(),
    };
    useUpdateTask.mockImplementation(jest.fn(() => mockUseUpdateTask));
    render(<TaskEditForm task={mockTask} onEditComplete={mockOnEditComplete} />);
    const cancelButton = screen.getByRole('button', { name: 'Cancel' });

    // Act
    userEvent.click(cancelButton);

    // Assert
    expect(mockOnEditComplete).toHaveBeenCalled();
  });

  test('should call updateTask on save', async () => {
    // Arrange
    const expectedTask = {
      title: 'test2',
      id: 1,
    };
    const mockOnEditComplete = jest.fn();
    const mockTask = {
      title: 'test',
      id: 1,
    };
    const mockUpdateTask = jest.fn();
    const mockUseUpdateTask = {
      updateTask: mockUpdateTask,
    };
    useUpdateTask.mockImplementation(jest.fn(() => mockUseUpdateTask));
    render(<TaskEditForm task={mockTask} onEditComplete={mockOnEditComplete} />);
    const saveButton = screen.getByRole('button', { name: 'Save' });
    const editInput = screen.getByTestId('task-edit-input');
    // Act
    userEvent.type(editInput, '2');
    userEvent.click(saveButton);

    // Assert
    expect(mockUpdateTask).toHaveBeenCalledWith(expectedTask);
    await waitFor(() => {
      expect(mockOnEditComplete).toHaveBeenCalled();
    });
  });
});

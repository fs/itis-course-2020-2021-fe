import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Task from './Task';

import useRemoveTask from '../../../hooks/useRemoveTask';
import useUpdateTask from '../../../hooks/useUpdateTask';

jest.mock('../../../hooks/useRemoveTask');
jest.mock('../../../hooks/useUpdateTask');

jest.mock('react-router-dom', () => ({
  Link: 'Link',
  Route: ({ children, path }) => children({ match: path === '/somewhere' }),
}));

describe('Task', () => {
  const mockTodo = { title: 'Tack title', id: '999' };
  const mockRemoveTask = jest.fn();
  const mockUpdateTask = jest.fn();
  test('Should render correctly', () => {
    // Arrange
    const mockUseRemoveTask = { removeTask: mockRemoveTask, data: {}, error: undefined, loading: undefined };
    useRemoveTask.mockImplementation(jest.fn(() => mockUseRemoveTask));
    // Act
    const { container } = render(<Task todo={mockTodo} />);
    // Assert
    expect(container).toMatchSnapshot();
  });
  test('Should render when click to edit', () => {
    // Arrange
    const mockUseRemoveTask = { removeTask: mockRemoveTask, data: {}, error: undefined, loading: undefined };
    useRemoveTask.mockImplementation(jest.fn(() => mockUseRemoveTask));
    const mockUseUpdateTask = { updateTask: mockUpdateTask, data: {}, error: undefined, loading: undefined };
    useUpdateTask.mockImplementation(jest.fn(() => mockUseUpdateTask));
    const { container, getByTestId } = render(<Task todo={mockTodo} />);
    const editButton = getByTestId('test-task-edit-button');
    // Act
    userEvent.click(editButton);
    // Assert
    expect(container).toMatchSnapshot();
  });
});

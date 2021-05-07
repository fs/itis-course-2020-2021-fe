import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  const mockText = 'Click';
  test('renders button', () => {
    // Arrange
    // Act
    render(<Button>{mockText}</Button>);
    // Assert
    expect(screen.getByText('Click')).toBeInTheDocument();
  });
  test('Should call function onClick', () => {
    // Arrange
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>{mockText}</Button>);
    const button = screen.getByText('Click');
    // Act
    userEvent.click(button);
    // Assert
    expect(mockOnClick).toHaveBeenCalled();
  });
  test('Should not call function onClick on disabled button', () => {
    // Arrange
    const mockOnClick = jest.fn();
    render(
      <Button onClick={mockOnClick} disabled>
        {mockText}
      </Button>,
    );
    const button = screen.getByText('Click');
    // Act
    userEvent.click(button);
    // Assert
    expect(mockOnClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
    expect(button).toMatchSnapshot();
  });
});

import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  render(<Button>Click</Button>);
  const linkElement = screen.getByText('Click');
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/atoms/Button';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('See tasks with GraphQL');
  expect(linkElement).toBeInTheDocument();
});

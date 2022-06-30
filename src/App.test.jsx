import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

/* eslint-disable no-undef */
test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Who doesn't follow you back/i);
  expect(linkElement).toBeInTheDocument();
});
/* eslint-enable no-undef */

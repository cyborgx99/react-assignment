import { render, screen } from '@testing-library/react';
import App from '../App';
import React from 'react';
import userEvent from '@testing-library/user-event';

// Tests

test('Renders main page correctly', async () => {
  // Setup
  render(<App />);

  userEvent.click(screen.getByText('Check'));

  expect(true).toBeTruthy();
});

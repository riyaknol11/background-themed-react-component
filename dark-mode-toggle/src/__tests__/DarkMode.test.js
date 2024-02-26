import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleButton from '../components/DarkMode.js';

test('Toggle button toggles dark mode correctly', () => {
  // Render the ToggleButton component
  const { getByText, getByRole } = render(<ToggleButton />);
  
  // Initially, dark mode should be off
  const toggleButton = getByRole('button');
  expect(toggleButton).toHaveTextContent('Switch to Dark Mode');

  // Click the toggle button to switch to dark mode
  fireEvent.click(toggleButton);
  expect(document.body).toHaveStyle('background-color: #333');
  expect(document.body).toHaveStyle('color: #fff');
  expect(toggleButton).toHaveTextContent('Switch to Light Mode');

  // Click the toggle button again to switch back to light mode
  fireEvent.click(toggleButton);
  expect(document.body).toHaveStyle('background-color: #fff');
  expect(document.body).toHaveStyle('color: #333');
  expect(toggleButton).toHaveTextContent('Switch to Dark Mode');
});

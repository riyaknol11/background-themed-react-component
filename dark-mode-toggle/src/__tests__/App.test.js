import { render, screen } from '@testing-library/react';
import App from '../components/App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Toggle Button State Example/i);
  expect(linkElement).toBeInTheDocument();
});

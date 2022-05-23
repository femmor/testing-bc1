import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn testing link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement).toBeInTheDocument();
});

test('url should link to the correct page', () => {
  render(<App />);
  const link = 'ultimateqa.com';
  const linkElement = screen.getByTestId('learn-link');
  // expect(linkElement).toHaveAttribute('href', 'https://ultimateqa.com');
  expect(linkElement.href).toContain(link);
});

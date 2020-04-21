import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { queryAllByText } = render(<App />);
  const linkElement = getByText(/武汉加油/i);
  expect(linkElement).toBeInTheDocument();
});

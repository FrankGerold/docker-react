import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('arithmetic bullshit test should work', () => {
  expect(5 * 5).toBe(25)
})

test('renders new text', () => {
  const { getByText } = render(<App />);
  const textEle = getByText(/ayy lmao/i);
  expect(textEle).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import renderer from 'react-test-renderer';
import { theme } from '../styles/theme';

test('renders button', () => {
  render(
    <Button onClick={() => {}} buttonType='primary'>
      Next question
    </Button>
  );
  const button = screen.queryByText('Next question');
  expect(button).toBeInTheDocument();
});

test('invokes any provided handlers', () => {
  const handler = jest.fn();
  render(
    <Button onClick={handler} buttonType='primary'>
      Next question
    </Button>
  );
  expect(handler).not.toHaveBeenCalled();
  const button = screen.queryByText('Next question');
  userEvent.click(button);
  expect(handler).toHaveBeenCalled();
});

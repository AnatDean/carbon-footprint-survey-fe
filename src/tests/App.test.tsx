import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';
import QuestionPage from '../components/Pages/QuestionPage';

import userEvent from '@testing-library/user-event';

describe('Button', () => {
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
});

describe('QuestionPage', () => {
  test('provided an question & answer object renders question details', () => {
    render(
      <QuestionPage
        currentQuestionNum={2}
        question_id={2}
        selectChoice={() => {}}
        selectedChoice=''
        totalQuestions={4}
        question={'Question Text'}
        answers={['A', 'B', 'C', 'D']}
        progress={() => {}}
      />
    );
    const questionTitle = screen.queryByText('Question Text');
    const questionMetaDetail = screen.queryByText('Question 3 of 4'); // accounts for - indexing

    expect(questionTitle).toBeInTheDocument();
    expect(questionMetaDetail).toBeInTheDocument();
  });
  test('provided an question & answer object renders quiz button for each answer', () => {
    render(
      <QuestionPage
        currentQuestionNum={2}
        totalQuestions={4}
        question_id={2}
        selectChoice={() => {}}
        selectedChoice=''
        question={'Question Text'}
        answers={['A', 'B', 'C', 'D']}
        progress={() => {}}
      />
    );
    const answer = screen.queryByText('A');

    expect(answer).toBeInTheDocument();
  });
  test('provided an question & answer object renders quiz button for each answer', () => {
    render(
      <QuestionPage
        currentQuestionNum={2}
        totalQuestions={4}
        question_id={2}
        selectChoice={() => {}}
        selectedChoice=''
        question={'Question Text'}
        answers={['A', 'B', 'C', 'D']}
        progress={() => {}}
      />
    );
    const progressButton = screen.queryByText('Next question');

    expect(progressButton).toBeInTheDocument();
  });
});

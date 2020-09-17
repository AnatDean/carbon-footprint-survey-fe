import React, { useState, useEffect } from 'react';
import { getQuestions } from '../../api';
import QuestionPage from '../Pages/QuestionPage';

const Quiz: React.FC<{}> = () => {
  const [questions, setQuestions] = useState([
    { question_id: 0, question: '', answers: [], choice: '' },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasErr] = useState();
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);

  useEffect(() => {
    // retrieve questions from API
    getQuestions()
      .then((questions) => {
        setQuestions(questions);
        setIsLoading(false);
      })
      .catch((err) => {
        setHasErr(err);
        setIsLoading(false);
      });
  }, []);

  const selectChoice = (id: number, answer: string): void => {
    // when answer is picked update questions array to store selected answer
    const updatedQuestions = questions.map((question) => {
      return question.question_id === id
        ? { ...question, choice: answer }
        : question;
    });
    setQuestions(updatedQuestions);
  };

  if (isLoading) {
    return <p>loading</p>;
  } else if (hasError) {
    return <h1>Oops something went wrong - do you have the server running?</h1>;
  } else if (currentQuestionNum + 1 <= questions.length) {
    // still questions left
    const { question_id, question, answers, choice } = questions[
      currentQuestionNum
    ];
    return (
      <QuestionPage
        currentQuestionNum={currentQuestionNum}
        question_id={question_id}
        question={question}
        answers={answers}
        selectedChoice={choice}
        totalQuestions={questions.length}
        selectChoice={selectChoice}
        progress={() => setCurrentQuestionNum(currentQuestionNum + 1)}
      />
    );
  }
  // no more questions -> reached end of survey
  else
    return (
      <>
        <h1>Finished!</h1>
        <h2>Your choices</h2>
        <ul>
          {questions.map(({ question, choice }) => (
            <li key={question}>
              Q{question}:
              <br />
              A: {choice}
            </li>
          ))}
        </ul>
      </>
    );
};

export default Quiz;

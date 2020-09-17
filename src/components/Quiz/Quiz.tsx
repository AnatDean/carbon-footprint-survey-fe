import React, { useState, useEffect } from 'react';
import { getQuestions } from '../../api';
import QuestionPage from '../Pages/QuestionPage';

const Quiz: React.FC<{}> = () => {
  const [questions, setQuestions] = useState([{ question: '', answers: [] }]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  useEffect(() => {
    getQuestions().then((questions) => {
      setQuestions(questions);
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <p>loading</p>
  ) : (
    <QuestionPage
      currentQuestionNum={currentQuestionNum}
      question={questions[currentQuestionNum].question}
      answers={questions[currentQuestionNum].answers}
      totalQuestions={questions.length}
    />
  );
};

export default Quiz;
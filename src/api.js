import axios from 'axios';

export const getQuestions = () => {
  return axios
    .get('http://localhost:9090/api/questions')
    .then(({ data: { questions } }) => {
      return questions;
    });
};

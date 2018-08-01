import axios from 'axios';

const CREATE_QUIZ_ROOT_URL = '/api/quiz/v1/quizzes';

var token = sessionStorage.getItem('auth_token');
export const createQuizAPIMethod = (questionsObj) => axios.post(
    `${CREATE_QUIZ_ROOT_URL}`, questionsObj, { headers: { "Authorization": `Bearer ${token}`, 'Content-Type': 'application/json' } }
);
import history from '../../history';
import { createQuizAPIMethod } from './APIsForCreateQuiz';

export const QUIZ_CREATED_SUCCESS = 'QUIZ_CREATED_SUCCESS';
export const QUIZ_CREATED_FAILED = 'QUIZ_CREATED_FAILED';

export const createQuiz = (listOfQuestions) => {
    return createQuizAPIMethod(listOfQuestions)
        .then((response) => {
            history.push('/SuccessComponent');
            return {
                type: QUIZ_CREATED_SUCCESS,
                payload: response
            }
        })
        .catch((error) => {
            return {
                type: QUIZ_CREATED_FAILED,
                payload: error
            }
        })

};

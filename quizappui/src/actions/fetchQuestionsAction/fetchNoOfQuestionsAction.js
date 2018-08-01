import history from '../../history';
import { fetchQestionApiMethod } from './APIsForFetchingQuestions';

export const FETCH_QUESTIONS_RECEIVED = 'FETCH_QUESTIONS_RECEIVED';
export const FETCH_QUESTIONS_REJECTED = 'FETCH_QUESTIONS_REJECTED';

export const fetchQuestions = (listOfQuestions) => {
    return fetchQestionApiMethod(listOfQuestions)
        .then((response) => {
            history.push('/CreateQuizComponent');
            return {
                type: FETCH_QUESTIONS_RECEIVED,
                payload: response
            }
        })
        .catch((error) => {
            return {
                type: FETCH_QUESTIONS_REJECTED,
                payload: error
            }
        })

};

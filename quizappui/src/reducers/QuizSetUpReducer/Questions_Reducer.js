import { FETCH_QUESTIONS_RECEIVED, FETCH_QUESTIONS_REJECTED } from '../../actions/fetchQuestionsAction/fetchNoOfQuestionsAction';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_QUESTIONS_RECEIVED:
            return action.payload.data;
        case FETCH_QUESTIONS_REJECTED:
            return action.payload.response.data;
    }
    return state;
}
import { QUIZ_CREATED_SUCCESS, QUIZ_CREATED_FAILED } from '../../actions/CreateQuizAction/CreateQuizAction';

export default function (state = [], action) {

    switch (action.type) {
        case QUIZ_CREATED_SUCCESS:
            return action.payload.data;
        case QUIZ_CREATED_FAILED:
            return action.payload.response.data;
    }
    return state;
}
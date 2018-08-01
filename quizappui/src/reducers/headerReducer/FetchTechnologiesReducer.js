import { LIST_OF_TECHNOLOGIES_RECEIVED, LIST_OF_TECHNOLOGIES_RECEIVED_FAILED } from '../../actions/index';

export default function (state = [], action) {

    switch (action.type) {
        case LIST_OF_TECHNOLOGIES_RECEIVED:
            return action.payload.data;
        case LIST_OF_TECHNOLOGIES_RECEIVED_FAILED:
            console.log('error', action.payload.response.data.error);
            return action.payload.response.data;
    }
    return state;
}
import { loginAction, fetchListOfTechnology } from './APIs';
import history from '../history';

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGIN_ACTION_REJECTED = 'LOGIN_ACTION_REJECTED';
export const LIST_OF_TECHNOLOGIES_RECEIVED = 'LIST_OF_TECHNOLOGIES_RECEIVED';
export const LIST_OF_TECHNOLOGIES_RECEIVED_FAILED = 'LIST_OF_TECHNOLOGIES_RECEIVED_FAILED';

export const loginActionCreater = (userName, password) => {
    return loginAction(userName, password)
        .then((response) => {
            history.push('/HeaderComponents');
            return {
                type: LOGIN_ACTION,
                payload: response
            }
        })
        .catch((error) => {
            return {
                type: "LOGIN_ACTION_REJECTED",
                payload: error
            }
        })
};

export const fetchListOfTechnologies = (token) => {
    return fetchListOfTechnology(token)
        .then((response) => {
            history.push('/SetupQuizComponent');
            return {
                type: LIST_OF_TECHNOLOGIES_RECEIVED,
                payload: response
            }
        })
        .catch((error) => {
            return {
                type: "LIST_OF_TECHNOLOGIES_RECEIVED_FAILED",
                payload: error
            }
        })

};


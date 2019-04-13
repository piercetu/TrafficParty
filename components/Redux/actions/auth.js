import { firebase, db } from '../../../firebase';

import { EMAIL_LOGIN, EMAIL_REGISTER, LOGOUT } from './types';

export const emailLogin = (email, password) => {
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({
                    type: EMAIL_LOGIN,
                    payload: user
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const emailRegister = (email, password) => {
    return dispatch => {
        firebase.auth().registerWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({
                    type: EMAIL_REGISTER,
                    payload: user
                });
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const logout = () => ({ type: LOGOUT, user: null });
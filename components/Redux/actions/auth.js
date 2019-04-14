import { firebase, db } from '../../../firebase';

import { EMAIL_LOGIN, EMAIL_REGISTER, LOGOUT, FB_LOGIN } from './types';

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
                emailRegister(email, password, dispatch);
            });
    };
};

export const emailRegister = (email, password, dispatch) => {
    return () => {
        firebase.auth().registerWithEmailAndPassword(email, password)
            .then(user => {
                dispatch({
                    type: EMAIL_REGISTER,
                    payload: user
                });
            })
            .catch(err => {
                console.log(err.message);
            });
    };
};

export const logout = () => ({ type: LOGOUT, user: null });

export const facebookLogin = () => {
    return dispatch => {
        var provider = new firebase.auth.FacebookAuthProvider();
        
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                var FACEBOOK_API_TOKEN = result.credential.accessToken;
                var { user } = result;

                dispatch({
                    type: FB_LOGIN,
                    payload: {
                        FACEBOOK_API_TOKEN,
                        user
                    }
                });
            }).catch(err => {
                // var errorCode = err.code;
                var errorMessage = err.message;
                // var email = err.email;
                // var credential = err.credential;

                console.log(err.message);
            });
    }
}
import { EMAIL_LOGIN, EMAIL_REGISTER, LOGOUT, FB_LOGIN } from '../actions/types';

const initialState = {
    user: null,
    FACEBOOK_API_TOKEN: null
};

export default AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case FB_LOGIN:
            let { FACEBOOK_API_TOKEN, user } = action.payload;
            return {
                ...state,
                FACEBOOK_API_TOKEN, user
            };

        case EMAIL_LOGIN:
            return {
                ...state,
                user: action.payload
            };

        case EMAIL_REGISTER:
            return {
                ...state,
                user: action.payload
            };
            
        case LOGOUT:
            return { ...initialState };

        default:
            return state;
    };
};
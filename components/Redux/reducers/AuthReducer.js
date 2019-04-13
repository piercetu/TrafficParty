import { EMAIL_LOGIN, EMAIL_REGISTER, LOGOUT } from '../actions/types';

const initialState = {
    user: null
};

export default AuthReducer = (state, action) => {
    switch (action.type) {
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
    }
}
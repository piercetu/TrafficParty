import { JOINED_PARTY, PARTY_NOT_FOUND } from '../actions/types';

const initialState = {
    party: null,
    error: ''
};

export default PartyReducer = (state = initialState, action) => {
    switch(action.type) {
        case JOINED_PARTY:
            return {
                ...state,
                party: action.payload
            };

        case PARTY_NOT_FOUND:
            return {
                ...state,
                error: 'Party not found, try again'
            };

        default:
            return state;
    };
};
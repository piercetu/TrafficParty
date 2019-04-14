import { JOINED_PARTY, PARTY_NOT_FOUND, ADD_WORDS } from '../actions/types';

const initialState = {
    party: null,
    error: '',
    words: null
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
        
        case ADD_WORDS:
            return {
                ...state,
                words: action.payload
            };

        default:
            return state;
    };
};
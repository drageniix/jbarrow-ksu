import { CHOOSE_STOCK, UPDATE_STOCKS, SET_ERRORS } from '../constants';

const initialState = { chosen: false };

export default () => (state = initialState, { type, payload }) => {
    switch (type) {
        case CHOOSE_STOCK:
        case UPDATE_STOCKS:
        case SET_ERRORS:
            return { ...state, ...payload };
        default:
            return state;
    }
};

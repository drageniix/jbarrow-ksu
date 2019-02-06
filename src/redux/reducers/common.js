import { CHOOSE_STOCK, UPDATE_STOCKS } from '../constants';

const initialState = { chosen: false };

export default () => (state = initialState, { type, payload }) => {
    switch (type) {
        case CHOOSE_STOCK:
            return { ...state, ...payload };
        case UPDATE_STOCKS:
            return { ...state, ...payload };
        default:
            return state;
    }
};

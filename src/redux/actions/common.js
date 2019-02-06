import { CHOOSE_STOCK, UPDATE_STOCKS, SET_ERRORS } from '../constants';
import db from '../../../database/firebase';

export const updateStocks = stocks => ({
    type: UPDATE_STOCKS,
    payload: {
        stocks
    }
});

export const chooseStock = stock => ({
    type: CHOOSE_STOCK,
    payload: {
        stock
    }
});

export const setErrors = error => ({
    type: SET_ERRORS,
    payload: {
        error
    }
});

export const setStock = (stock, student) => (dispatch, getState) => {
    const index = getState()
        .common.stocks.map(stock =>
            stock.student.toLowerCase().replace(/\s/g, '')
        )
        .findIndex(stock => stock === student.toLowerCase().replace(/\s/g, ''));
    if (index === -1) {
        db.doc(stock.symbol)
            .set({ ...stock, student })
            .then(() => {
                dispatch({
                    type: CHOOSE_STOCK,
                    payload: {
                        error: null,
                        stock: null,
                        chosen: true
                    }
                });
            });
    } else {
        dispatch({
            type: CHOOSE_STOCK,
            payload: {
                error:
                    "You've already chosen " +
                    getState().common.stocks[index].symbol +
                    '.'
            }
        });
    }
};

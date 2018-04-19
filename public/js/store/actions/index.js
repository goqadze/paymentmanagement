import * as api from '../api/index.js';

let actions = {};
window['actions'] = actions;

export const fetchCurrentYearPayments = () => {
    const filter = {
        min_date: new Date(new Date().getFullYear(), 0, 1)
    };
    return fetchPayments(filter, 'FETCH_CURRENT_YEAR_PAYMENTS');
};

actions['fetchCurrentYearPayments'] = fetchCurrentYearPayments;

export const fetchPayments = (filter = {}, type = 'FETCH_PAYMENTS') => (dispatch, getState) => {
    dispatch({
        type: `${type}_REQUEST`,
        filter
    });

    return api.fetchPayments(filter).then(
        response => {
            dispatch({
                type: `${type}_SUCCESS`,
                filter,
                response
            });
        },
        error => {
            dispatch({
                type: `${type}_FAILURE`,
                filter,
                error: error || 'Something went wrong.',
            });
        }
    );
};

actions['fetchPayments'] = fetchPayments;

export const addPayment = (newPayment) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_PAYMENT_REQUEST',
        newPayment
    });

    return api.addPayment(newPayment).then(
        response => {
            dispatch({
                type: 'ADD_PAYMENT_SUCCESS',
                response
            });
        },
        error => {
            dispatch({
                type: 'ADD_PAYMENT_FAILURE',
                error: error || 'Something went wrong.',
            });
        }
    );
};

actions['addPayment'] = addPayment;

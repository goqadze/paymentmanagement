import * as api from '../api/index.js';

export const fetchPayments = (filter = {}) => (dispatch, getState) => {
    dispatch({
        type: 'FETCH_PAYMENTS_REQUEST',
        filter
    });

    return api.fetchPayments(filter).then(
        response => {
            dispatch({
                type: 'FETCH_PAYMENTS_SUCCESS',
                filter,
                response
            });
        },
        error => {
            dispatch({
                type: 'FETCH_PAYMENTS_FAILURE',
                filter,
                error: error || 'Something went wrong.',
            });
        }
    );
};

window['fetchPaymentsAction'] = fetchPayments;

export const addPayment = (newPayment) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_PAYMENT_REQUEST',
        filter
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

window['addPaymentAction'] = addPayment;

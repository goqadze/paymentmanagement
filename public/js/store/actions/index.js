import * as api from '../api/index.js';

export const fetchCurrentYearPayments = () => {
    const filter = {
        min_date: new Date(new Date().getFullYear(), 0, 1)
    };
    return fetchPayments(filter, 'FETCH_CURRENT_YEAR_PAYMENTS');
}

window['fetchCurrentYearPaymentsAction'] = fetchCurrentYearPayments;

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

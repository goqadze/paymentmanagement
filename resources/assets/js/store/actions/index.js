import * as api from "../api";

export const fetchCurrentYearPayments = () => {
    const currentYear = new Date(new Date().getFullYear(), 0, 1);
    const filter = {
        min_date: currentYear
    };

    return fetchPayments(filter, 'FETCH_CURRENT_YEAR_PAYMENTS');
};

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
                error: error.errors || 'Something went wrong.',
            });
        }
    );
};

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
                errors: error.errors || 'Something went wrong.',
            });
        }
    )
};

export const fetchCategories = () => (dispatch, getState) => {
    return api.fetchCategories().then(
        response => {
            dispatch({
                type: `FETCH_CATEGORIES_SUCCESS`,
                response
            });
        }
    );
};


let actions = {};
window['actions'] = actions;

actions['fetchCurrentYearPayments'] = fetchCurrentYearPayments;
actions['fetchPayments'] = fetchPayments;
actions['addPayment'] = addPayment;
actions['fetchCategories'] = fetchCategories;

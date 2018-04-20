import isAdding from './isAdding.js';
import isFetching from './isFetching.js';
import selectedCategory from './selectedCategory.js';
import payments from './payments.js';
import paymentsCurrentYear from './paymentsCurrentYear.js';
import lastAction from './lastAction.js';
import errorMessages from './errorMessages.js';
import categories from './categories.js';

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](state[key], action);
                return nextState;
            }, {}
        )
    }
};

const paymentApp = combineReducers({
    isAdding,
    isFetching,
    selectedCategory,
    payments,
    categories,
    paymentsCurrentYear,
    lastAction,
    errorMessages,
});

export default paymentApp;

export const getIsFetching = (state) => state.isFetching;
export const getIsAdding = (state) => state.isAdding;
export const getSelectedCategory = (state) => state.selectedCategory;
export const getPayments = (state) => state.payments;
export const getPaymentsCurrentYear = (state) => state.paymentsCurrentYear;
export const getLastAction = (state) => state.lastAction;
export const getErrorMessages = (state) => state.errorMessages;


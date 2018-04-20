import isAdding from './isAdding';
import isFetching from './isFetching';
import selectedCategory from './selectedCategory';
import payments from './payments';
import paymentsCurrentYear from './paymentsCurrentYear';
import lastAction from './lastAction';
import errorMessages from './errorMessages';
import categories from './categories';

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


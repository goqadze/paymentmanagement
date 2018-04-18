import isAdding from './isAdding.js';
import isFetching from './isFetching.js';
import payments from './payments.js';
import paymentsCurrentYear from './paymentsCurrentYear.js';
import lastAction from './lastAction.js';

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
    payments,
    paymentsCurrentYear,
    lastAction,
});

export default paymentApp;

export const getIsFetching = (state) => state.isFetching;
export const getIsAdding = (state) => state.isAdding;
export const getPayments = (state) => state.payments;
export const getLastAction = (state) => state.lastAction;


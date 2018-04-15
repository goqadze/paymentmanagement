import isAdding from './isAdding.js';
import isFetching from './isFetching.js';
import payments from './payments.js';

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
});

export default paymentApp;

export const getIsFetching = (state) => state.isFetching;
export const getIsAdding = (state) => state.isAdding;
export const getPayments = (state) => state.payments;


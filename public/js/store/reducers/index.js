import isAdding from './isAdding';
import isFetching from './isFetching';
import payments from './payments';

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

export default paymentApp = combineReducers({
    isAdding,
    isFetching,
    payments,
});

export const getIsFetching = (state) => state.isFetching;
export const getIsAdding = (state) => state.isAdding;
export const getPayments = (state) => state.payments;


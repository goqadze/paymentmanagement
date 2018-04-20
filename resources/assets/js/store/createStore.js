const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener())
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        //return subscription for unsubscribe
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    dispatch({}); // get initial value

    return {
        getState,
        dispatch,
        subscribe
    };
};

export default createStore;


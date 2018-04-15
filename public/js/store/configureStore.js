import createStore from './createStore'
import {logger, thunk} from './middlewares'
import paymentApp from './reducers'

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    })
};

const configureStore = () => {
    let store = createStore(paymentApp);
    const middlewares = [thunk, logger];

    wrapDispatchWithMiddlewares(store, middlewares);

    return store;
};

export default configureStore;
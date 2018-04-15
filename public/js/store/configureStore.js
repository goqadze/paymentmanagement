import createStore from './createStore.js';
import {logger, thunk} from './middlewares/index.js';
import paymentApp from './reducers/index.js';

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
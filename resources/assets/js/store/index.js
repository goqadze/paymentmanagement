import configureStore from './configureStore.js';
import * as actions from './actions/index.js';

const store = configureStore();

window['store'] = store;

export default store;


import configureStore from './configureStore';
import * as actions from './actions';

const store = configureStore();

window['store'] = store;

export default store;


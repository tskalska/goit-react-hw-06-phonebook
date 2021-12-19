import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import routReducer from './form/form-reducer'


const store = createStore(routReducer, devToolsEnhancer());

export default store;   
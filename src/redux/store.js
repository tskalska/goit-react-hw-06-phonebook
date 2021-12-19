import { createStore , applyMiddleware, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import {reducer} from './form/form-reducer'

// const reducer = combineReducers({
//     form: formReducer,
// })

const store = createStore(reducer, devToolsEnhancer());

export default store;   
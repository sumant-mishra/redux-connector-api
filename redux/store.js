import {createStore, combineReducers, applyMiddleware} from 'redux';
//import CountReducer from './reducers/CountReducer';
import VODItemsReducer from './reducers/VODsReducer';
import thunk from 'redux-thunk';

//console.log(VODItemsReducer);
const reducer = combineReducers({
    VODItemsReducer
});


let store = createStore(reducer, applyMiddleware(thunk));

//const store = createStore(CountReducer);

export default store;
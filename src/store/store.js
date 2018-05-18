import { combineReducers,createStore,applyMiddleware } from 'redux';
import userReducer from './user_reducer';
import postReducer from './post_reducer';
import thunk from 'redux-thunk';
//import midLogger from './middleware/logger';
//import error from './middleware/error';
import { createLogger } from 'redux-logger';

const reducers = combineReducers({
    user: userReducer,
    posts: postReducer
});

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(reducers, {user: { name: "Oscar", age: 22 }, posts: []}, middleware);

store.subscribe((() => {
    console.log("store changed" , store.getState());
}));

store.dispatch({type: "CHANGE_NAME", payload: "Memo"});
store.dispatch({type: "CHANGE_AGE", payload: 23});

export default store;
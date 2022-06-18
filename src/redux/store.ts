import { createStore, combineReducers,  applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { usersReducer } from './reducers';

const reducers = combineReducers({
    usersReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
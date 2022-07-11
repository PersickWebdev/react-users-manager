import { createStore, combineReducers,  applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { usersReducer, autoFillReducer } from './reducers';

const reducers = combineReducers({
    usersReducer,
    autoFillReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
import { usersTypes } from '../actionTypes';
import { UsersActionTypes } from '../actionCreators/usersActions';
import { IUser } from '../../types/';

interface IInitialState {
    users: IUser[]
}

const initialState: IInitialState = {
    users: []
}

export const usersReducer = (state = initialState, action: UsersActionTypes) => {
    switch(action.type) {
        case usersTypes.getAll :
            return {
                ...state,
                users: action.payload
            }
        default :
            return state;
    }
}
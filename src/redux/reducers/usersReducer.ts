import { IUser } from '../../types/';

interface IInitialState {
    users: IUser[]
}

const initialState: IInitialState = {
    users: []
}

export const usersReducer = (state = initialState, action: any) => {

}
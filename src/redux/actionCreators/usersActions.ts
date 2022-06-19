import { usersTypes } from '../actionTypes';
import { IUser } from '../../types';

export interface IActionGetAllUsers {
    type: typeof usersTypes.getAll,
    payload: IUser[],
}

export interface IActionGetOneUser {
    type: typeof usersTypes.getOne,
    payload: IUser,
}

export interface IActionAddUser {
    type: typeof usersTypes.add,
    payload: IUser,
}

export interface IActionEditUser {
    type: typeof usersTypes.edit,
    payload: IUser,
}

export interface IActionRemoveUser {
    type: typeof usersTypes.remove,
    payload: number | string,
}

export type UsersActionTypes = IActionGetAllUsers | IActionGetOneUser | IActionAddUser | IActionEditUser | IActionRemoveUser;

export interface IUsersActions {
    getAll: (usersArray: []) => {
        type: typeof usersTypes.getAll,
        payload: IUser[]
    },
    getOne: (userObject: IUser) => {
        type: typeof usersTypes.getOne,
        payload: IUser,
    },
    add: (userObject: IUser) => {
        type: typeof usersTypes.add,
        payload: IUser,
    },
    edit: (userObject: IUser) => {
        type: typeof usersTypes.edit,
        payload:  IUser,
    },
    remove: (userId: number | string) => {
        type: typeof usersTypes.remove,
        payload: number | string,
    }
}

export const usersActions: IUsersActions = {
    getAll: (usersArray: IUser[]): IActionGetAllUsers => {
        return {
            type: usersTypes.getAll,
            payload: usersArray,
        }
    },
    getOne: (userObject: IUser): IActionGetOneUser => {
        return {
            type: usersTypes.getOne,
            payload: userObject,
        }
    },
    add: (userObject: IUser): IActionAddUser => {
        return {
            type: usersTypes.add,
            payload: userObject,
        }
    },
    edit: (userObject: IUser): IActionEditUser => {
        return {
            type: usersTypes.edit,
            payload: userObject,
        }
    },
    remove: (id: number | string): IActionRemoveUser => {
        return {
            type: usersTypes.remove,
            payload: id,
        }
    },
}
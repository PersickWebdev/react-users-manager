import { usersTypes } from '../actionTypes';

export const usersActions = {
    getAll: (usersArray: []) => {
        return {
            type: usersTypes.getAll,
            payload: usersArray,
        }
    },
    getOne: (userObject: {}) => {
        return {
            type: usersTypes.getOne,
            payload: userObject,
        }
    },
    add: (userId: number | string) => {
        return {
            type: usersTypes.add,
            payload: userId,
        }
    },
    edit: (userId: number | string) => {
        return {
            type: usersTypes.edit,
            payload: userId,
        }
    },
    remove: (userId: number | string) => {
        return {
            type: usersTypes.remove,
            payload: userId,
        }
    },
}
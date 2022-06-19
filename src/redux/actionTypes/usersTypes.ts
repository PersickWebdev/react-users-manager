export interface IUsersTypes {
    getAll: string,
    getOne: string,
    add: string,
    edit: string,
    remove: string,
}

export const usersTypes: IUsersTypes = {
    getAll: 'USERS/GET_ALL_USERS',
    getOne: 'USERS/GET_ONE_USER',
    add: 'USERS/ADD_USER',
    edit: 'USERS/EDIT_USER',
    remove: 'USERS/REMOVE_USER',
}
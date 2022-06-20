import axios from 'axios';
import { Endpoints } from '../api';
import { usersActions } from '../redux/actionCreators';

export const useRequests = () => {
    // To get all users:
    const getAllUsersRequest = () => {
        return axios.get(Endpoints.users);
    };

    // To get all users and dispatch them to store:
    const getAllUsersThunk = () => async (dispatch: any) => {
        const response = await axios.get(Endpoints.users);
        dispatch(usersActions.getAll(response.data));
    };

    // To get, add, edit and remove one user:
    const manageUserRequest = (userId: number | string) => {
        return axios.get(Endpoints.user(userId));
    };

    return { getAllUsersRequest, getAllUsersThunk, manageUserRequest };
};
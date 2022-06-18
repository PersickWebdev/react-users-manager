import axios from 'axios';
import { Endpoints } from '../api';

export const useRequests = () => {

    // To get all users:
    const getAllUsersRequest = () => {
        return axios.get(Endpoints.users);
    };

    // To get, add, edit or remove one user:
    const manageUserRequest = (userId: number | string) => {
        return axios.get(Endpoints.user(userId));
    };

    return { getAllUsersRequest, manageUserRequest };
};
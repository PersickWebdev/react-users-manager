import axios from 'axios';
import { Endpoints } from '../api';
import { usersActions } from '../redux/actionCreators';
import { autoCompleteActions } from '../redux/actionCreators';
import { useUtils } from '../utils';

export const useRequests = () => {
    const { getAllCountries } = useUtils();

    // To get all users:
    const getAllUsersRequest = () => {
        return axios.get(Endpoints.users);
    };

    // To get all users and dispatch them to store:
    const getAllUsersThunk = () => async (dispatch: any) => {
        const response = await axios.get(Endpoints.users);
        dispatch(usersActions.getAll(response.data));
        dispatch(autoCompleteActions.getCountries(getAllCountries(response.data)));
    };

    // To get, add, edit and remove one user:
    const manageUserRequest = (userId: number | string) => {
        return axios.get(Endpoints.user(userId));
    };

    return { getAllUsersRequest, getAllUsersThunk, manageUserRequest };
};
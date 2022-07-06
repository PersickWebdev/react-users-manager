import { AutoCompleteActionTypes } from '../actionCreators/autoCompleteActions';
import {autoCompleteTypes} from "../actionTypes";

interface ICountries {
    countries: string[],
}

const initialState: ICountries = {
    countries: [],
}

export const autoCompleteReducer = (state = initialState, action: AutoCompleteActionTypes) => {
    switch(action.type) {
        case autoCompleteTypes.getCounties:
            return {
                ...state,
                countries: action.payload,
            }
        default:
            return state;
    }
}
import { AutoFillActionTypes } from '../actionCreators/autoFillActions';
import { autoFillTypes } from '../actionTypes';

interface ICountries {
    countries: string[];
    industries: string[];
    statuses: string[];
}

const initialState: ICountries = {
    countries: [],
    industries: [],
    statuses: [],
}

export const autoFillReducer = (state = initialState, action: AutoFillActionTypes) => {
    switch(action.type) {
        case autoFillTypes.getCounties:
            return {
                ...state,
                countries: action.payload,
            }
        case autoFillTypes.getIndustries:
            return {
                ...state,
                industries: action.payload,
            }
        case autoFillTypes.getStatuses:
            return {
                ...state,
                statuses: action.payload,
            }
        default:
            return state;
    }
}
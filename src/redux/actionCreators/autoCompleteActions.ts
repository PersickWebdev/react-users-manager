import { autoCompleteTypes } from '../actionTypes';

export interface IActionGetCountries {
    type: typeof autoCompleteTypes.getCounties,
    payload: string[],
}

export interface IAutoCompleteActions {
    getCountries: (countriesArray: string[]) => {
        type: typeof autoCompleteTypes.getCounties,
        payload: string[]
    }
}

export type AutoCompleteActionTypes = IActionGetCountries;

export const autoCompleteActions: IAutoCompleteActions = {
    getCountries: (countriesArray: string[]): IActionGetCountries => {
        return {
            type: autoCompleteTypes.getCounties,
            payload: countriesArray,
        }
    }
}
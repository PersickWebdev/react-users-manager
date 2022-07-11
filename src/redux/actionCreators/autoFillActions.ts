import { autoFillTypes } from '../actionTypes';

export interface IActionGetCountries {
    type: typeof autoFillTypes.getCounties,
    payload: string[],
}

export interface IActionGetIndustries {
    type: typeof autoFillTypes.getIndustries,
    payload: string[],
}

export interface IActionGetStatuses {
    type: typeof autoFillTypes.getStatuses,
    payload: string[],
}

export interface IAutoFillActions {
    getCountries: (countriesArray: string[]) => {
        type: typeof autoFillTypes.getCounties,
        payload: string[]
    },
    getIndustries: (industriesArray: string[]) => {
        type: typeof autoFillTypes.getIndustries,
        payload: string[]
    },
    getStatuses: (statusesArray: string[]) => {
        type: typeof autoFillTypes.getStatuses,
        payload: string[]
    },
}

export type AutoFillActionTypes = IActionGetCountries | IActionGetIndustries | IActionGetStatuses;

export const autoFillActions: IAutoFillActions = {
    getCountries: (countriesArray: string[]): IActionGetCountries => {
        return {
            type: autoFillTypes.getCounties,
            payload: countriesArray,
        }
    },
    getIndustries: (industriesArray: string[]): IActionGetIndustries => {
        return {
            type: autoFillTypes.getIndustries,
            payload: industriesArray,
        }
    },
    getStatuses: (statusesArray: string[]): IActionGetStatuses => {
        return {
            type: autoFillTypes.getStatuses,
            payload: statusesArray,
        }
    },
}
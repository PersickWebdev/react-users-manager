export interface IAutoFillTypes {
    getCounties: string;
    getIndustries: string;
    getStatuses: string;
}

export const autoFillTypes: IAutoFillTypes = {
    getCounties: 'AUTOFILL/GET_COUNTRIES',
    getIndustries: 'AUTOFILL/GET_INDUSTRIES',
    getStatuses: 'AUTOFILL/GET_STATUSES',
}
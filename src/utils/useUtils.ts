import { IUser } from '../types';

export const useUtils = () => {
    const filterUsers = (sourceArray: IUser[], searchOption: string) => {
        return sourceArray.filter((item: IUser) => {
            if (item.personal.name.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
                || item.personal.lastName.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
                || item.company.name.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
                || item.company.country.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1)
            {
                return item;
            } else {
                return
            }
        })
    };

    const getAllCountries = (sourceArray: IUser[]) => {
        const resultArray = new Set();

        sourceArray.forEach((userObject: IUser) => {
            resultArray.add(userObject.company.country);
        });

        return <string[]>Array.from(resultArray);
    };

    return { filterUsers, getAllCountries };
}
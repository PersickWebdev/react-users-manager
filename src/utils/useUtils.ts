import { IUser } from '../types';

export const useUtils = () => {
    // const filterUsers = (sourceArray: IUser[], searchOption: string) => {
    //     return sourceArray.filter((item: IUser) => {
    //         if (
    //                item.status.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
    //             || item.personal.name.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
    //             || item.personal.lastName.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
    //             || item.company.name.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
    //             || item.company.country.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
    //             || item.company.industry.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
    //             || item.company.email.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
    //         )
    //         {
    //             return item;
    //         } else {
    //             return;
    //         }
    //     })
    // };

    const filterUsers = (sourceArray: IUser[], optionsObject: {}) => {
        const matchesSet = new Set();

        sourceArray.forEach((user: IUser) => {
            Object.keys(user).forEach((key: string) => {
                // @ts-ignore
                if (typeof user[key] === 'object') {
                    // @ts-ignore
                    Object.keys(user[key]).forEach((k) => {
                        // @ts-ignore
                        if (user[key][k] === optionsObject[k]) {
                            matchesSet.add(user);
                        }
                    })
                } else {
                    // @ts-ignore
                    if (user[key] === optionsObject[key]) {
                        matchesSet.add(user);
                    }
                }
            })
        });

        return Array.from(matchesSet) as IUser[];
    };

    const getAllCountries = (sourceArray: IUser[]) => {
        const resultArray = new Set();

        sourceArray.forEach((userObject: IUser) => {
            resultArray.add(userObject.company.country);
        });

        return Array.from(resultArray) as string[];
    };

    const getAutofillData = (sourceArray: IUser[], key: string, parameter: string = '') => {
        const resultArray = new Set();

        sourceArray.forEach((userObject: IUser) => {
            if (parameter === 'company') {
                // @ts-ignore
                resultArray.add(userObject.company[key]);
            } else if (parameter === 'personal') {
                // @ts-ignore
                resultArray.add(userObject.personal[key]);
            } else {
                // @ts-ignore
                resultArray.add(userObject[key]);
            }
        });

        return Array.from(resultArray) as string[];
    };

    return { filterUsers, getAllCountries, getAutofillData };
}
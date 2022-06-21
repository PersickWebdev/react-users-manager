import { IUser } from '../types';

export const useUtils = () => {
    const filterUsers = (sourceArray: IUser[], searchOption: string) => {
        return sourceArray.filter((item: IUser) => {
            if (item.personal.name.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
             || item.personal.lastName.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1
             || item.company.name.toLowerCase().indexOf(searchOption.toLowerCase()) !== -1)
            {
                return item;
            } else {
                return
            }
        })
    };

    return { filterUsers };
}
import React, { FC } from 'react';
import styles from './Table.module.scss';

import { IUser } from '../../types';

interface ITable {
    isAbleToManage: boolean;
    users: IUser[];
    tableHeadingData: string[];
    setProfileId?: (state: number) => void;
}

const Table: FC<ITable> = ({ users, tableHeadingData, isAbleToManage, setProfileId }: ITable) => {

    const openProfileHandler = (id: number) => {
        setProfileId && setProfileId(id);
    };

    const tableHeading = tableHeadingData.map((item: string, index: number) => {
        return (
            <th
                className={`${styles['table__heading-cell']} ${styles[item]}`}
                key={`${item}_${index}`}
            >
                {item}
            </th>
        )
    });

    const tableRows = users.map((item) => {
       return (
           <tr
               className={`${styles['table__row']} ${isAbleToManage ? styles['is-clickable'] : ''}`}
               key={item.id}
               id={String(item.id)}
               onClick={() => openProfileHandler(Number(item.id))}
           >
               <td className={`${styles['table__cell']} ${styles['user-name']}`}>
                   {item.personal.name} {item.personal.lastName}
               </td>
               <td className={`${styles['table__cell']} ${styles['company-name']}`}>
                   {item.company.name}
               </td>
               <td className={`${styles['table__cell']} ${styles['country']}`}>
                   {item.company.country}
               </td>
               <td className={`${styles['table__cell']} ${styles['industry']}`}>
                   {item.company.industry}
               </td>
               <td className={`${styles['table__cell']} ${styles['email']}`}>
                   {item.company.email}
               </td>
               <td className={`${styles['table__cell']} ${styles['status']}`}>
                   {item.status}
               </td>
               <td className={`${styles['table__cell']} ${styles['rating']}`}>
                   {item.company.rating}/100
               </td>
           </tr>
       )
    });

    return (
        <React.Fragment>
        {users.length
            ?
            <table className={styles['table']}>
                <thead>
                    <tr className={styles['table__heading-row']}>
                        {tableHeading}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
                :
                <p>
                    No results found ...
                </p>
        }
        </React.Fragment>
    );
};

export default Table;
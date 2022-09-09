import React, { FC, useState, useEffect } from 'react';
import styles from './Table.module.scss';

import { IUser } from '../../types';
import { Icons } from '../../ui';

interface ITable {
    isAbleToManage: boolean;
    users: IUser[];
    tableHeadingData: string[];
}

const Table: FC<ITable> = ({ users, tableHeadingData, isAbleToManage }: ITable) => {
    const [ activeRowId, setActiveRowId ] = useState(0);

    const infoHandler = (id: number) => {
        console.log('infoHandler');
        console.log('Id: ', id);
    };

    const editHandler = (id: number) => {
        console.log('editHandler');
        console.log('Id: ', id);
    };

    const removeHandler = (id: number) => {
        console.log('removeHandler');
        console.log('Id: ', id);
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
               className={styles['table__row']}
               key={item.id}
               id={String(item.id)}
               onClick={() => setActiveRowId(Number(item.id))}
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
               {isAbleToManage
                   ?
                   <div className={`${styles['table__row-actions-panel']} ${activeRowId === Number(item.id) ? styles['is-visible'] : ''}`}>
                       <div className={styles['table__icon-box']}>
                           {Icons.info({
                               className: `${styles['table__icon-refresh']}`
                           }, () => infoHandler(Number(item.id)))
                           }
                       </div>
                       <div className={styles['table__icon-box']}>
                           {Icons.edit({
                               className: `${styles['table__icon-refresh']}`
                           }, () => editHandler(Number(item.id)))
                           }
                       </div>
                       <div className={styles['table__icon-box']}>
                           {Icons.remove({
                               className: `${styles['table__icon-refresh']}`
                           }, () => removeHandler(Number(item.id)))
                           }
                       </div>
                   </div>
                   :
                   <></>
               }
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
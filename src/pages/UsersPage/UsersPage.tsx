import React, { FC , useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Table } from '../../components';
import { ControlPanel } from '../../components';
import { useUtils } from '../../utils';

import { IUser } from '../../types';

import styles from './UsersPage.module.scss';
import '../../index.scss';

interface IUsersPage {}

const UsersPage: FC<IUsersPage> = ({}: IUsersPage) => {
    const { filterUsers } = useUtils();
    // Todo: find out 'useSelector' typing
    // @ts-ignore
    const { users } = useSelector((state) => state.usersReducer);
    const [ isFilterActive, setIsFilterActive ] = useState<boolean>(false);
    const [ filterOptions, setFilterOptions ] = useState({});
    const [ filteredUsers, setFilteredUsers ] = useState<IUser[]>([]);

    useEffect(() => {
        if (Object.keys(filterOptions).length) {
            setIsFilterActive(true);
            setFilteredUsers(filterUsers(users, filterOptions));
        } else {
            setIsFilterActive(false);
        }
    }, [filterOptions]);

    return (
        <div className={styles['users-page']}>
            <div className={styles['container']}>
                <ControlPanel
                    isAbleToManage={false}
                    isFilterActive={isFilterActive}
                    setFilterOptions={setFilterOptions}
                />
                <Table
                    isAbleToManage={false}
                    users={isFilterActive ? filteredUsers : users}
                    tableHeadingData={['name', 'company', 'country', 'industry', 'email', 'status', 'rating']}
                />
            </div>
        </div>
    );
};

export default UsersPage;
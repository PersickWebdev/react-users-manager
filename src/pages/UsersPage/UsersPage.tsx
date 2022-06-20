import React from 'react';
import { useSelector } from 'react-redux';

import { Table } from '../../components';

import styles from './UsersPage.module.scss';
import '../../index.scss';

interface IUsersPage {}

const UsersPage = ({}: IUsersPage) => {
    // @ts-ignore
    const { users } = useSelector((state) => state.usersReducer);

    return (
        <div className={styles['users-page']}>
            <div className={styles['container']}>
                <Table
                    users={users}
                    tableHeadingData={['name', 'company', 'country', 'industry', 'email', 'status', 'rating']}
                />
            </div>
        </div>
    );
};

export default UsersPage;
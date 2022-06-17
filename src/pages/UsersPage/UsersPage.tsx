import React from 'react';
import styles from './UsersPage.module.scss';
import '../../index.scss';

interface IUsersPage {}

const UsersPage = ({}: IUsersPage) => {
    return (
        <div className={styles['users-page']}>
            <div className={styles['container']}>
                Users Page
            </div>
        </div>
    );
};

export default UsersPage;
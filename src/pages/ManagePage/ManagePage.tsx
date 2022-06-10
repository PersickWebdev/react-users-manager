import React from 'react';
import styles from './ManagePage.module.scss';

interface IManagePage {}

const ManagePage = ({}: IManagePage) => {
    return (
        <div className={styles['manage-page']}>
            <div className={styles['container']}>
                Manage Page
            </div>
        </div>
    );
};

export default ManagePage;
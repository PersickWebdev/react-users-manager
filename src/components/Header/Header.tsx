import React, { FC } from 'react';
import styles from './Header.module.scss';
import { Navigation } from '../../components';

interface IHeader {}

const Header:FC<IHeader> = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <p className={styles['header__title']}>
                    Users manager
                </p>
            </div>
            <Navigation/>
        </header>
    );
};

export default Header;
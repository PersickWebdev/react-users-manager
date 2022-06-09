import React, { FC } from 'react';
import styles from './Header.module.scss';

interface IHeader {}

const Header:FC<IHeader> = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <p className={styles['header__title']}>
                    Users manager
                </p>
            </div>
        </header>
    );
};

export default Header;
import React, { FC, useState } from 'react';
import styles from './Header.module.scss';
import { Navigation } from '../../components';

interface IHeader {}

const Header:FC<IHeader> = () => {
    const [ activePageId, setActivePageId ] = useState<number>(0);

    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <p className={styles['header__title']}>
                    Users manager
                </p>
            </div>
            <Navigation
                activePageId={activePageId}
                setActivePageId={setActivePageId}
            />
        </header>
    );
};

export default Header;
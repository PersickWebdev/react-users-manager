import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface IFooter {}

const Footer:FC<IFooter> = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['container']}>
                <p className={styles['footer__rights']}>
                    All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
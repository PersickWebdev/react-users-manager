import React, { FC } from 'react';
import styles from './Footer.module.scss';

interface IFooter {}

const Footer:FC<IFooter> = () => {
    return (
        <footer className={styles['footer']}>
            Footer
        </footer>
    );
};

export default Footer;
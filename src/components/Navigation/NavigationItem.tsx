import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

interface INavigationItem {
    id: number | string,
    label: string,
    path: string,
}

export const NavigationItem = ({ id, label, path }: INavigationItem) => {

    return (
        <li
            className={styles['navigation__list-item']}
        >
            <Link to={path}>
                {label}
            </Link>
        </li>
    );

};
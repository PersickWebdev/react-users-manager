import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

interface INavigationItem {
    id: number;
    label: string;
    path: string;
    isActive: boolean;
    setActivePageId: (state: number) => void;
}

export const NavigationItem = ({ id, label, path, isActive, setActivePageId }: INavigationItem) => {

    return (
        <li
            className={styles['navigation__list-item']}
        >
            <Link
                className={`${styles['navigation__link']} ${isActive ? styles['is-active'] : ''}`}
                to={path}
                onClick={() => setActivePageId(id)}
            >
                {label}
            </Link>
        </li>
    );

};
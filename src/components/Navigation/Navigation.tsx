import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationData, INavigationItem } from './NavigationData';
import { NavigationItem } from './NavigationItem';

interface INavigation {}

const Navigation = ({ }: INavigation) => {

    const navigationElements = NavigationData.map((item: INavigationItem) => {
        return (
            <NavigationItem
                key={`${item.id}_${item.label}`}
                id={item.id}
                label={item.label}
                path={item.path}
            />
        )
    });

    return (
        <nav className={styles['navigation']}>
            <ul className={styles['navigation__list']}>
                {navigationElements}
            </ul>
        </nav>
    );
};

export default Navigation;
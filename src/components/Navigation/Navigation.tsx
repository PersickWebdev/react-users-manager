import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationData, INavigationItem } from './NavigationData';
import { NavigationItem } from './NavigationItem';

interface INavigation {
    activePageId: number;
    setActivePageId: (state: number) => void;
}

const Navigation = ({ activePageId, setActivePageId }: INavigation) => {

    const navigationElements = NavigationData.map((item: INavigationItem) => {
        return (
            <NavigationItem
                key={`${item.id}_${item.label}`}
                id={item.id}
                label={item.label}
                path={item.path}
                setActivePageId={setActivePageId}
                isActive={activePageId === item.id}
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
import React, { FC } from 'react';

import { Icons, Search, Select } from '../../ui';

import styles from './ControlPanel.module.scss';
import '../../index.scss';

interface IControlPanel {
    isFilterActive: boolean;
    setSearchedValue: (state: string) => void;
}

const ControlPanel: FC<IControlPanel> = ({ isFilterActive, setSearchedValue }: IControlPanel) => {
    const refreshHandler = () => {
        setSearchedValue('');
    };

    return (
        <div className={styles['control-panel']}>
            <Search
                id='search'
                name='search'
                placeholder='Search by name, company, email ...'
                customStyles={{ width: '300px' }}
                setSearchedValue={setSearchedValue}
                isFilterActive={isFilterActive}
            />
            <Select
                id='select-country'
                name='country'
                placeholder='Choose country'
                customStyles={{ width: '150px' }}
            />
            <div
                className={styles['control-panel__icon-box']}
            >
                {Icons.refresh({
                    className: `${styles['control-panel__icon-refresh']}`
                }, refreshHandler)}
            </div>
        </div>
    );
};

export default ControlPanel;
import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { Icons, Search, Select } from '../../ui';

import styles from './ControlPanel.module.scss';
import '../../index.scss';

interface IControlPanel {
    isAbleToManage: boolean;
    isFilterActive: boolean;
    setFilterOptions: (state: any) => void;
}

const ControlPanel: FC<IControlPanel> = ({ isFilterActive, setFilterOptions, isAbleToManage = false }: IControlPanel) => {
    // @ts-ignore
    const { countries } = useSelector((state) => state.autoFillReducer);
    // @ts-ignore
    const { industries } = useSelector((state) => state.autoFillReducer);
    // @ts-ignore
    const { statuses } = useSelector((state) => state.autoFillReducer);

    const refreshHandler = () => {
        setFilterOptions(() => {
            const cleanObject = {};
            return {
                ...cleanObject
            }
        });
    };

    const addHandler = () => {
        console.log('addHandler')
    };

    return (
        <div className={styles['control-panel']}>
            {isAbleToManage
                &&
                <div className={styles['control-panel__icon-box']}>
                    {Icons.add({
                        className: `${styles['control-panel__icon-refresh']}`
                        }, addHandler)
                    }
                </div>
            }
            <Search
                id='search'
                name='search'
                placeholder='Search by name, company, email ...'
                customStyles={{ width: '300px' }}
                setFilterOptions={setFilterOptions}
                isFilterActive={isFilterActive}
            />
            <Select
                id='select-country'
                name='country'
                placeholder='Choose country'
                dropdownItems={countries}
                customStyles={{ width: '150px' }}
                setFilterOptions={setFilterOptions}
                isFilterActive={isFilterActive}
            />
            <Select
                id='select-industry'
                name='industry'
                placeholder='Choose industry'
                dropdownItems={industries}
                customStyles={{ width: '150px' }}
                setFilterOptions={setFilterOptions}
                isFilterActive={isFilterActive}
            />
            <Select
                id='select-status'
                name='status'
                placeholder='Choose status'
                dropdownItems={statuses}
                customStyles={{ width: '150px' }}
                setFilterOptions={setFilterOptions}
                isFilterActive={isFilterActive}
            />
            <div
                className={styles['control-panel__icon-box']}
                onClick={refreshHandler}
            >
                {Icons.refresh({
                    className: `${styles['control-panel__icon-refresh']}`
                    })
                }
            </div>
        </div>
    );
};

export default ControlPanel;
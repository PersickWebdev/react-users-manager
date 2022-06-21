import React, { FC } from 'react';

import { Search } from '../../ui';

import styles from './ControlPanel.module.scss';
import '../../index.scss';

interface IControlPanel {}

const ControlPanel: FC<IControlPanel> = ({}: IControlPanel) => {
    return (
        <div className={styles['control-panel']}>
            <Search
                id='search'
                name='search'
                placeholder='Search by name, company, email ...'
                customStyles={{ width: '300px' }}
            />
        </div>
    );
};

export default ControlPanel;
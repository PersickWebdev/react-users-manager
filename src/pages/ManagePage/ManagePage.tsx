import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ControlPanel } from '../../components';
import { Table } from '../../components';
import { Profile } from '../../components';
import { useUtils } from '../../utils';

import { IUser } from '../../types';

import styles from './ManagePage.module.scss';
import '../../index.scss';

interface IManagePage {}

const ManagePage = ({}: IManagePage) => {
    const { filterUsers } = useUtils();
    // Todo: find out 'useSelector' typing
    // @ts-ignore
    const { users } = useSelector((state) => state.usersReducer);
    const [ isFilterActive, setIsFilterActive ] = useState<boolean>(false);
    const [ filterOptions, setFilterOptions ] = useState({});
    const [ filteredUsers, setFilteredUsers ] = useState<IUser[]>([]);
    const [ profileId, setProfileId ] = useState<number>(0);

    useEffect(() => {
        if (Object.keys(filterOptions).length) {
            setIsFilterActive(true);
            setFilteredUsers(filterUsers(users, filterOptions));
        } else {
            setIsFilterActive(false);
        }
    }, [filterOptions]);

    console.log(`ManagePage - profile id: `, profileId);

    return (
        <div className={styles['manage-page']}>
            <div className={styles['container']}>
                {profileId !== 0
                    ?
                    <Profile userId={profileId}/>
                    :
                    <>
                        <ControlPanel
                            isAbleToManage={true}
                            isFilterActive={isFilterActive}
                            setFilterOptions={setFilterOptions}
                        />
                        <p>Click row to call additional options</p>
                        <Table
                            isAbleToManage={true}
                            setProfileId={setProfileId}
                            users={isFilterActive ? filteredUsers : users}
                            tableHeadingData={['name', 'company', 'country', 'industry', 'email', 'status', 'rating']}
                        />
                    </>
                }
            </div>
        </div>
    );
};

export default ManagePage;
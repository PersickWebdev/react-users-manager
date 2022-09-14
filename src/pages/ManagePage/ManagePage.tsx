import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ControlPanel } from '../../components';
import { Table } from '../../components';
import { Profile } from '../../components';
import { Modal } from '../../ui';
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
    const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);

    useEffect(() => {
        if (Object.keys(filterOptions).length) {
            setIsFilterActive(true);
            setFilteredUsers(filterUsers(users, filterOptions));
        } else {
            setIsFilterActive(false);
        }
    }, [filterOptions]);

    return (
        <div className={styles['manage-page']}>
            <div className={styles['container']}>
                {profileId !== 0
                    ?
                    <Profile
                        userId={profileId}
                        setIsModalVisible={setIsModalVisible}
                    />
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

            <Modal
                heading='Modal Heading'
                description='Modal description'
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            >
                <p>
                    Modal children
                </p>
                <div className={styles['manage-page__buttons']}>
                    <a
                        className={styles['manage-page__button']}
                        href="#"
                        onClick={() => setIsModalVisible(false)}
                    >
                        Close
                    </a>
                </div>
            </Modal>

        </div>
    );
};

export default ManagePage;
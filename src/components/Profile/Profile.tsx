import React from 'react';
import styles from './Profile.module.scss';

interface IProfile {
    userId: number;
}

const Profile = ({ userId }: IProfile) => {
    // Todo: create a request to get user with the specified id.

    return (
        <div className={styles['profile']}>
            Profile
        </div>
    );
};

export default Profile;
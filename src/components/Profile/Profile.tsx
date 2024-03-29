import React, { useState, useEffect } from 'react';
import { Form } from '../../components';
import { useRequests } from '../../api';
import { Icons } from '../../ui';
import { IUser } from '../../types';
import styles from './Profile.module.scss';

interface IProfile {
    userId: number;
    setIsModalVisible: (state: boolean) => void;
}

const Profile = ({ userId, setIsModalVisible }: IProfile) => {
    const { manageUserRequest } = useRequests();
    const [ currentUser, setCurrentUser ] = useState({} as IUser);
    const [ isEditMode, setIsEditMode ] = useState<boolean>(false);
    const [ formData, setFormData ] = useState({
        id: '',
        status: '',
        name: '',
        lastName: '',
        age: '',
        gender: '',
        phone: '',
        companyName: '',
        country: '',
        industry: '',
        rating: '',
        email: '',
    });
    const [ formErrors, setFormErrors ] = useState({
        status: '',
        name: '',
        lastName: '',
        age: '',
        gender: '',
        phone: '',
        companyName: '',
        country: '',
        industry: '',
        rating: '',
        email: '',
    });

    const editHandler = () => {
        setIsModalVisible(false);
        setIsEditMode(true);
    };

    const removeHandler = () => {

    };

    useEffect(() => {
        (async () => {
            try {
                const response = await manageUserRequest(userId);
                setCurrentUser(response.data);
            } catch(error) {
                console.log('Server error: ', error);
            }
        })();
    }, [ userId ]);

    return (
        <>
        {isEditMode
            ?
            <Form
                currentUser={currentUser}
                heading="Edit user"
                subheadings={['Personal information:', 'Company information:']}
                description="Testing description"
                setFormData={setFormData}
                formErrors={formErrors}
                setFormErrors={setFormErrors}
            />
            :
            <div className={styles['profile']}>
                <h3 className={styles['profile__heading-03']}>
                    <span>ID: {currentUser?.id}</span>
                    <span>{currentUser?.personal?.name} {currentUser?.personal?.lastName}</span>
                    <span>{currentUser?.status}</span>
                </h3>
                <div className={styles['profile__info']}>
                    <div className={styles['profile__personal']}>
                        <h6 className={styles['profile__heading-06']}>
                            Personal Information:
                        </h6>
                        <p className={styles['profile__info-line']}>
                            <span>First name: </span>
                            <span>{currentUser?.personal?.name}</span>
                        </p>
                        <p className={styles['profile__info-line']}>
                            <span>Last name: </span>
                            <span>{currentUser?.personal?.lastName}</span>
                        </p>
                        <p className={styles['profile__info-line']}>
                            <span>Age: </span>
                            <span>{currentUser?.personal?.age}</span>
                        </p>
                        <p className={styles['profile__info-line']}>
                            <span>Gender: </span>
                            <span>{currentUser?.personal?.gender}</span>
                        </p>
                        <p className={styles['profile__info-line']}>
                            <span>Phone: </span>
                            <span>{currentUser?.personal?.phone}</span>
                        </p>
                    </div>
                    <div className={styles['profile__company']}>
                        <h6 className={styles['profile__heading-06']}>
                            Company Information:
                        </h6>
                        <p className={styles['profile__info-line']}>
                            <span>Name: </span>
                            <span>{currentUser?.company?.name}</span>
                        </p>
                        <p className={styles['profile__info-line']}>
                            <span>Industry: </span>
                            <span>{currentUser?.company?.industry}</span>
                        </p>
                        <p className={styles['profile__info-line']}>
                            <span>Country: </span>
                            <span>{currentUser?.company?.country}</span>
                        </p>
                        <p className={styles['profile__info-line']}>
                            <span>Email: </span>
                            <span>{currentUser?.company?.email}</span>
                        </p>
                        <p className={styles['profile__info-line']}>
                            <span>Rating: </span>
                            <span>{currentUser?.company?.rating}</span>
                        </p>
                    </div>
                </div>
                <div className={styles['profile__actions']}>
                    <div
                        className={styles['profile__icon-box']}
                        onClick={editHandler}
                    >
                        {Icons.edit({
                            className: `${styles['profile__icon-edit']}`
                        })
                        }
                    </div>
                    <div
                        className={styles['profile__icon-box']}
                        onClick={removeHandler}
                    >
                        {Icons.remove({
                            className: `${styles['profile__icon-remove']}`
                        })
                        }
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default Profile;
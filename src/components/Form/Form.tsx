import React from 'react';
import styles from './Form.module.scss';
import { Input } from '../../ui';
import { IUser } from '../../types';

interface IForm {
    currentUser?: IUser;
    heading: string;
    subheadings?: string[];
    description?: string;
    setFormData: (state: any) => void;
    formErrors: any;
    setFormErrors: (state: any) => void;
}

const Form = ({ currentUser, heading, description, subheadings, setFormData, formErrors, setFormErrors }: IForm) => {
    return (
        <form className={styles['form']}>
            <div className={styles['form__header']}>
                <h3 className={styles['form__heading']}>
                    {heading}
                </h3>
                {description
                    &&
                    <p className={styles['form__description']}>
                        {description}
                    </p>
                }
            </div>
            <div className={styles['form__content']}>
                <div className={styles['form__content-box']}>
                    {subheadings?.length
                        &&
                        <h6 className={styles['form__subheading']}>
                            {subheadings[0]}
                        </h6>
                    }
                    <div className={styles['form__section']}>
                        <Input
                            id="input-first-name"
                            name="name"
                            value={currentUser ? currentUser.personal.name : ''}
                            placeholder="First name ..."
                            label="First name:"
                            error={formErrors.name}
                            setFormData={setFormData}
                            setFormErrors={setFormErrors}
                        />
                    </div>
                </div>
                <div className={styles['form__content-box']}>
                    {subheadings?.length
                        &&
                        <h6 className={styles['form__subheading']}>
                            {subheadings[1]}
                        </h6>
                    }
                </div>
            </div>
            <div className={styles['form__actions']}>
                Actions
            </div>
        </form>
    );
};

export default Form;
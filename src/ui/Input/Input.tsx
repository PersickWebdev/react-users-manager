import React, { useState } from 'react';
import styles from './Input.module.scss';

interface IInput {
    id: string;
    name: string;
    value: string;
    placeholder: string;
    label: string;
    error: string;
    setFormData: (state: any) => void;
    setFormErrors: (stat: any) => void;
}

const Input = ({ id, name, value, placeholder, label, setFormData, setFormErrors, error }:IInput) => {
    const [ inputValue, setInputValue ] = useState<string | null>(null);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setFormData((state: any) => {
           return {
               ...state,
               [event.target.name]: event.target.value
           }
        });
        setFormErrors && setFormErrors((state: any) => {
            return {
                ...state,
                [event.target.name]: ''
            }
        });
    };

    return (
        <div
            className={styles['input']}
        >
            <label
                className={styles['input__label']}
                htmlFor={id}
            >
                <span className={styles['input__label-text']}>{label}</span>
                <input
                    className={styles['input__element']}
                    type="text"
                    id={id}
                    name={name}
                    value={inputValue ?? value}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </label>
            {error
                ?
                <p className={styles['input__error']}>
                    {error}
                </p>
                :
                ''
            }
        </div>
    );
};

export default Input;
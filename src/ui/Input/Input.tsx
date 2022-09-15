import React from 'react';
import styles from './Input.module.scss';

interface IInput {
    id: string;
    name: string;
    placeholder: string;
    label: string;
}

const Input = ({ id, name, placeholder, label }:IInput) => {
    return (
        <div
            className={styles['input']}
        >
            <label
                htmlFor={id}
            >
                {label}
                <input
                    className={styles['input__element']}
                    type="text"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                />
            </label>
        </div>
    );
};

export default Input;
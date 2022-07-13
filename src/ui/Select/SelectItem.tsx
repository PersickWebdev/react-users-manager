import React, { FC } from 'react';
import styles from './Select.module.scss';

interface ISelectItem {
    name: string;
    label: string;
    index: number;
    setInputValue: (state: string) => void;
    setFilterOptions: (state: {}) => void;
}

export const SelectItem: FC<ISelectItem> = ({ name, label, index, setInputValue, setFilterOptions }: ISelectItem) => {
    const onClickHandler = () => {
        setInputValue(label);
        setFilterOptions((state: {}) => {
            return {
                ...state,
                [name]: label
            }
        });
    }

    return (
        <li
            className={styles['select__dropdown-item']}
            onClick={onClickHandler}
        >
            {label}
        </li>
    );
};
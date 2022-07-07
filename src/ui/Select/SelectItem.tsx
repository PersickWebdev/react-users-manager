import React, { FC } from 'react';
import styles from './Select.module.scss';

interface ISelectItem {
    name: string;
    index: number;
    setInputValue: (state: string) => void;
    setSearchedValue: (state: string) => void;
}

export const SelectItem: FC<ISelectItem> = ({ name, index, setInputValue, setSearchedValue }: ISelectItem) => {
    const onClickHandler = () => {
        setInputValue(name);
        setSearchedValue(name);
    }

    return (
        <li
            className={styles['select__dropdown-item']}
            key={`${name}_${index}`}
            onClick={onClickHandler}
        >
            {name}
        </li>
    );
};
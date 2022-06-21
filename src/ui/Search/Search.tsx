import React, { FC, useState } from 'react';

import { Icons } from '../../ui';

import styles from './Search.module.scss';

interface ISearch {
    id: string;
    name: string;
    placeholder: string;
    customStyles?: any;
}

const Search: FC<ISearch> = ({ id, name, placeholder, customStyles }: ISearch) => {
    const [ inputValue, setInputValue ] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onIconSearchHandler = () => {
        console.log('inputValue: ', inputValue);
    };

    const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        console.log('input value: ', inputValue);
    }

    return (
        <div
            className={styles['search']}
            style={customStyles ? customStyles : {}}
        >
            <input
                className={styles['search__input']}
                type='text'
                id={id}
                name={name}
                value={inputValue ?? ''}
                placeholder={placeholder}
                onChange={onChangeHandler}
                onKeyUp={onKeyUpHandler}
            />
            <div
                className={styles['search__icon-box']}
                onClick={onIconSearchHandler}
            >
                {Icons.search({
                    className: `${styles['search__icon-search']}`
                })}
            </div>
        </div>
    );
};

export default Search;
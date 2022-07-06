import React, { FC, useState, useRef } from 'react';
import styles from './Select.module.scss';
import { Icons } from '../../ui';
import { useOnClickOutside } from '../../utils';

interface ISelect {
    id: string;
    name: string;
    placeholder: string;
    dropdownItems: string[];
    customStyles: any;
}

const Select: FC<ISelect> = ({ id, name, placeholder, dropdownItems, customStyles }: ISelect) => {
    const [ inputValue, setInputValue ] = useState<string>('');
    const [ isDropdownOpened, setIsDropdownOpened ] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLUListElement>(null);

    const dropdownListItems = dropdownItems.map((item: string, index: number) => {
        return (
            <li
                className={styles['select__dropdown-item']}
                key={`${item}_${index}`}
            >
                {item}
            </li>
        )
    });

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const openDropdownHandler = () => {
        setIsDropdownOpened(true);
    };

    useOnClickOutside(dropdownRef, () => setIsDropdownOpened(false));
    
    return (
        <div
            className={styles['select']}
            style={customStyles ? customStyles : {}}
            onClick={openDropdownHandler}
        >
            <input
                className={styles['select__input']}
                type="text"
                id={id}
                name={name}
                value={inputValue ?? ''}
                placeholder={placeholder}
                onChange={onChangeHandler}
                readOnly={true}
            />

            {Icons.arrow({
                className: `${styles['select__icon-arrow']} ${isDropdownOpened ? styles['is-opened'] : ''}`
            })}

            <ul
                className={`${styles['select__dropdown']} ${isDropdownOpened ? styles['is-opened'] : ''}`}
                ref={dropdownRef}
            >
                {dropdownListItems}
            </ul>
        </div>
    );
};

export default Select;
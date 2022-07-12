import React, { FC, useState, useEffect, useRef } from 'react';
import styles from './Select.module.scss';
import { Icons } from '../../ui';
import { useOnClickOutside } from '../../utils';
import { SelectItem } from './SelectItem';

interface ISelect {
    id: string;
    name: string;
    placeholder: string;
    dropdownItems: string[];
    setFilterOptions: (state: {}) => void;
    isFilterActive: boolean;
    customStyles: any;
}

const Select: FC<ISelect> = ({ id, name, placeholder, dropdownItems, setFilterOptions, isFilterActive, customStyles }: ISelect) => {
    const [ inputValue, setInputValue ] = useState<string>('');
    const [ isDropdownOpened, setIsDropdownOpened ] = useState<boolean>(false);

    const dropdownRef = useRef<HTMLUListElement>(null);

    const dropdownElements = dropdownItems.map((item: string, index: number) => {
        return (
            <SelectItem
                key={`${item}_${index}`}
                name={name}
                label={item}
                index={index}
                setInputValue={setInputValue}
                setFilterOptions={setFilterOptions}
            />
        )
    });

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const openDropdownHandler = () => {
        setIsDropdownOpened(true);
    };

    useEffect(() => {
        setIsDropdownOpened(false);
    }, [ inputValue ]);

    useEffect(() => {
        if (!isFilterActive) {
            setInputValue('');
            setFilterOptions(() => {
                const cleanObject = {};
                return {
                    ...cleanObject
                }
            });
        }
    }, [isFilterActive]);

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
                {dropdownElements}
            </ul>
        </div>
    );
};

export default Select;
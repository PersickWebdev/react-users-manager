import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';
import { useOnClickOutside } from '../../utils';

interface IModal {
    heading?: string;
    description?: string;
    children: any;
    isModalVisible: boolean;
    setIsModalVisible: (state: boolean) => void;
}

const Modal = ({ heading, description, children, isModalVisible, setIsModalVisible }: IModal) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {
        const div = modalRef.current;

        if (isModalVisible) {
            div && div.classList.add(styles['is-active']);
            document.body.style.overflow = 'hidden';
        } else {
            div && div.classList.remove(styles['is-active']);
            document.body.style.overflow = '';
        }

    }, [isModalVisible]);

    useOnClickOutside(modalRef, () => isModalVisible && closeModal());

    return (
        <div
            className={styles['modal']}
            ref={modalRef}
        >
            <div className={styles['modal__content']}>
                {heading
                    &&
                    <h3 className={styles['modal__heading']}>
                        {heading}
                    </h3>
                }
                {description
                    &&
                    <p className={styles['modal__description']}>
                        {description}
                    </p>
                }
                {children}

            </div>
        </div>
    );
};

export default Modal;
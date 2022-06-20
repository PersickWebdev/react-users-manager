import React, { useEffect } from 'react';

import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UsersPage, ManagePage } from './pages';
import { Header, Footer } from './components';
import { useRequests } from './api';

import styles from './App.module.scss';
import './index.scss';

export const App = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { getAllUsersThunk } = useRequests();

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllUsersThunk());
    }, []);

    return (
        <div className={styles['application']}>
            <Header/>
            <main className={styles['application__main']}>
                <SwitchTransition>
                    <CSSTransition
                        key={location.key}
                        timeout={200}
                        classNames="fade"
                        unmountOnExit={true}
                    >
                        <Routes location={location}>
                            <Route path='/users' element={<UsersPage/>}/>
                            <Route path='/manage' element={<ManagePage/>}/>
                        </Routes>
                    </CSSTransition>
                </SwitchTransition>
            </main>
            <Footer/>
        </div>
    );
}
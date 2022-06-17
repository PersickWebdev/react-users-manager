import React from 'react';
import styles from './App.module.scss';
import './index.scss';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Routes, Route, useLocation } from 'react-router-dom';
import { UsersPage, ManagePage } from './pages';
import { Header, Footer } from './components';

export const App = () => {
    const location = useLocation();

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
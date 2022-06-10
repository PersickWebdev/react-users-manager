import React from 'react';
import styles from './App.module.scss';
import { Routes, Route } from 'react-router-dom';
import { UsersPage, ManagePage } from './pages';
import { Header, Footer } from './components';

export const App = () => {
    return (
        <div className={styles['application']}>
            <Header/>
            <main className={styles['application__main']}>
                <Routes>
                    <Route path='/users' element={<UsersPage/>}/>
                    <Route path='/manage' element={<ManagePage/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}
import React from 'react';
import styles from './App.module.scss';
import { Header, Footer } from './components';

export const App = () => {
    return (
        <div className={styles['application']}>
            <Header/>
            <main className={styles['application__main']}>
                Main
            </main>
            <Footer/>
        </div>
    );
}
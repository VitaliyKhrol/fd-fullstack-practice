import React from 'react';
import Dialoglist from '../../components/Dialoglist';
import MessageArea from '../../components/MessageArea';
import Chat from '../../components/Chat';
import styles from './Dashboard.module.css';


const Dashboard = () => {
    return (
        <main className={styles.main}>
            <Dialoglist />
            <section className={styles.container}>
                <Chat/>
                <MessageArea />
            </section>
        </main>
    );
}

export default Dashboard;

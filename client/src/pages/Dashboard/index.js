import React, { useEffect } from 'react';
import Dialoglist from '../../components/Dialoglist';
import MessageArea from '../../components/MessageArea';
import Chat from '../../components/Chat';
import styles from './Dashboard.module.css';
import history from '../../browserHistory';
import { connect } from 'react-redux';
import { getUserDataAction } from '../../actions/actionCreators'

const Dashboard = (props) => {

    useEffect(() => {
        if (!props.user) {
            if (localStorage.getItem('refreshToken')) {
                props.getUserData();
            } else {
                history.push('/')
            }
        }
    }, [props.user]);

    return (
        <main className={styles.main}>
            <Dialoglist />
            <section className={styles.container}>
                <Chat />
                <MessageArea />
            </section>
        </main>
    );
}

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = {
    getUserData: getUserDataAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

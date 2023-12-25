import { useState } from 'react';
import styles from './Header.module.css';
import Modal from 'react-modal';
import Login from '../login/login.jsx';



export default function Header() {

    const customStyles = {
        content: {
            width: '480px',
            height: '272px',
            flexShrink: '0',
            paddingRight: '0',
            borderRadius: '12px',
            background: '#FFF',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => { setIsModalOpen(true) }

    const closeModal = () => { setIsModalOpen(false) }



    return (

        <header className={styles.header}>
            <img className={styles.redberryLogo} src="src\LOGO-02 3.jpg" alt="Redberry Logo" />
            <button className={styles.login} onClick={openModal}>შესვლა</button>
            <Modal
                isOpen={isModalOpen}

                onRequestClose={closeModal}
                style={customStyles}
            >
                <Login />
            </Modal>
        </header>


    );
}
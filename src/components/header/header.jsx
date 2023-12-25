import styles from './Header.module.css';

export default function Header() {
    return (

        <header className={styles.header}>
            <img className={styles.redberryLogo} src="src\LOGO-02 3.jpg" alt="Redberry Logo" />
            <button className={styles.login}>შესვლა</button>
        </header>


    );
}
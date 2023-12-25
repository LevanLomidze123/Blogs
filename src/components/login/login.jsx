import styles from './login.module.css';

export default function Login() {
    return (
        <div>
            <svg className={styles.exitIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7.75732 16.2426L16.2426 7.75736" stroke="#1A1A1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.2426 16.2426L7.75732 7.75736" stroke="#1A1A1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h1 className={styles.loginH1}>შესვლა</h1>
            <label className={styles.emailLabel} htmlFor="">ელ-ფოსტა</label>
            <input className={styles.emailButton} type="email" placeholder='Example@redberry.ge' />
            <button className={styles.loginButton}>შესვლა</button>

        </div>
    )
}
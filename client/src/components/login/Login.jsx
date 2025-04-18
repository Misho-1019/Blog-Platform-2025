import styles from './Login.module.css';

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

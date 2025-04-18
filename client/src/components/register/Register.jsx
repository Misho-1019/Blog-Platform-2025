import styles from './Register.module.css';

export default function Register() {
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2>Register</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

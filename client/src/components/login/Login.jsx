import { useActionState } from 'react';
import styles from './Login.module.css';

export default function Login({
    onLogin
}) {
    const loginHandler = (previousState, formData) => {
        const values = Object.fromEntries(formData)

        onLogin(values.email)

        return values;
    }

    const [values, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' })
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

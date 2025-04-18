import { useActionState, useContext } from 'react';
import styles from './Login.module.css';
import { useLogin } from '../../api/authApi';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/UserContext';

export default function Login() {
    const { userLoginHandler } = useContext(UserContext)
    const { login } = useLogin()
    const navigate = useNavigate()

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData)

        const authData = await login(values.email, values.password)

        userLoginHandler(authData);

        navigate('/')
    }

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' })
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2>Login</h2>
                <form action={loginAction}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" disabled={isPending} >Log In</button>
                </form>
            </div>
        </div>
    );
}

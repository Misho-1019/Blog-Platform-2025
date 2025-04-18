import { useRegister } from '../../api/authApi';
import styles from './Register.module.css';

export default function Register() {
    const { register } = useRegister()
    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData)

        const confirmPassword = formData.get('confirm-password')

        if (password !== confirmPassword) {
            console.log('Password mismatch!');
            
            return;
        }

        const authData = await register(email, password);
    }

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2>Register</h2>
                <form action={registerHandler}>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

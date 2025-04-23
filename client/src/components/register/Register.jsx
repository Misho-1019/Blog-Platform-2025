import { useContext } from 'react';
import { useRegister } from '../../api/authApi';
import styles from './Register.module.css';
import { useNavigate } from 'react-router';
import { UserContext } from '../../context/UserContext';

export default function Register() {
    const { register } = useRegister()
    const { userLoginHandler } = useContext(UserContext)
    const navigate = useNavigate()

    const registerHandler = async (formData) => {
        const { username, email, password } = Object.fromEntries(formData)

        const confirmPassword = formData.get('re-password')

        if (password !== confirmPassword) {
            console.log('Passwords mismatch!');
            
            return;
        }

        const authData = await register( username, email, password );
        
        userLoginHandler(authData)
        
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2>Register</h2>
                <form action={registerHandler}>
                    <input type="text" name="username" placeholder="Username" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <input type="password" name="re-password" placeholder="Repeat Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

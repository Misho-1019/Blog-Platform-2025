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
        const { email, password } = Object.fromEntries(formData)

        const authData = await register( email, password);
        
        userLoginHandler(authData)
        
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2>Register</h2>
                <form action={registerHandler}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

import { useContext } from 'react';
import { useRegister } from '../../api/authApi';
import styles from './Register.module.css';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router';

export default function Register() {
    const { register } = useRegister()
    const { userLoginHandler } = useContext(UserContext)
    const navigate = useNavigate()

    const registerHandler = async (e) => {
        e.preventDefault() 

        const formData = new FormData(e.target)

        const { email, password } = Object.fromEntries(formData)

        const authData = await register( email, password);
        
        userLoginHandler(authData)
        
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h2>Register</h2>
                <form onSubmit={registerHandler}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

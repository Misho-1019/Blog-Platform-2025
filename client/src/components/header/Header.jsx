import { useContext } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router';
import { UserContext } from '../../context/UserContext';

export default function Header() {
    const { email } = useContext(UserContext)
    console.log(email);
    
    
    return (
        <header className={styles.header}>
            <div className={styles.logo}>BlueBlog</div>
            <nav className={styles.nav}>
                {email
                    ? (
                        <div className='user'>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )
                    : (
                        <div className='guest'>
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }
            </nav>
        </header>
    );
}

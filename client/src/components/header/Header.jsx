import styles from './Header.module.css';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

export default function Header() {
    const { email } = useAuth();

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Pulse Stream</div>
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

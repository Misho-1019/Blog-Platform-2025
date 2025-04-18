import styles from './Header.module.css';
import { Link } from 'react-router';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>BlueBlog</div>
            <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}

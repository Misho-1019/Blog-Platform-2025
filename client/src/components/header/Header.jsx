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
                            <Link to="/search">Search</Link>
                            <a href={`https://accounts.spotify.com/authorize?client_id=cd9f4f5e15ad4cdfa22b7a099c49c5f4&response_type=code&redirect_uri=${encodeURIComponent('http://127.0.0.1:5173/callback')}&scope=${encodeURIComponent('user-read-private user-read-email user-library-read playlist-read-private')}`}>
                                Connect Spotify
                            </a>
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

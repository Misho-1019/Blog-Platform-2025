import styles from './Home.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            <h1>Welcome to Pulse Stream</h1>
            <p>Powered by smart algorithms, PulseStream learns your taste, curates real-time playlists, and brings you the sounds that match your mood, moment, and motion.</p>
        </div>
    );
}

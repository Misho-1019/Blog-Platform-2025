import { useState } from "react";
import styles from './SearchPage.module.css';
import SongItem from "./item/SongItem";

export default function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(false)

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSearch = async () => {
        if (!searchQuery) return;

        setLoading(true);
        const token = localStorage.getItem('spotify_access_token')

        if (!token) {
            console.error('No token found!');
            setLoading(false)
            return;
        }

        try {
            const response = await fetch(`https://api.spotify.com/v1/search?q=${searchQuery}&type=track&limit=10`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

            if (!response.ok) {
                throw new Error('Error fetching songs')
            }

            const data = await response.json()

            setSongs(data.tracks.items)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching songs:', err);
            setLoading(false)
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Search for Songs</h1>
            <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for songs, artists, albums..."
                className={styles.input}
            />
            <button onClick={handleSearch} className={styles.button}>
                Search
            </button>

            {loading && <p className={styles.loading}>Loading...</p>}

            <ul className={styles.songList}>
                {songs.map((song) => <SongItem key={song.id} {...song} />)}
            </ul>
        </div>
    )
}
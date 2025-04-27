import { Link, useParams } from 'react-router';
import styles from './SongDetails.module.css';
import { useEffect, useState } from 'react';
import { useLikes } from '../../api/likeApi';

export default function SongDetails() {
    const { songId } = useParams()
    const spotifyToken = localStorage.getItem('spotify_access_token')
    const [song, setSong] = useState(null)
    const { likes, like } = useLikes(songId)

    useEffect(() => {
        if (!songId || !spotifyToken) return;

        const fetchSong = async () => {
            try {
                const response = await fetch(`https://api.spotify.com/v1/tracks/${songId}`, {
                    headers: {
                        Authorization: `Bearer ${spotifyToken}`,
                    },
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch song')
                }

                const data = await response.json();
                setSong(data)
            } catch (err) {
                console.error(err);
            }
        }

        fetchSong()
    }, [songId, spotifyToken])


    if (!song) return <p>Loading song details...</p>;

    const formatDuration = (duration) => {
        const minutes = Math.floor(duration / 60000)
        const seconds = Math.floor((duration % 60000) / 1000)

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    return (
        <div className={styles.detailsContainer}>
            <div className={styles.albumCoverSection}>
                <img
                    src={song.album.images[0].url}
                    alt={song.name}
                    className={styles.albumImage}
                />
            </div>

            <div className={styles.infoSection}>
                <h1 className={styles.songTitle}>{song.name}</h1>
                <h2 className={styles.artistName}>{song.artists[0].name}</h2>
                <p className={styles.albumName}>From album: {song.album.name}</p>

                <div className={styles.extraInfo}>
                    <p><strong>Release Date:</strong> {song.album.release_date}</p>
                    <p><strong>Duration:</strong> {formatDuration(song.duration_ms)}</p>
                    <p><strong>Popularity:</strong> {song.popularity}M</p>
                </div>

                {song.preview_url ? (
                    <div>
                        <button onClick={() => new Audio(song.preview_url).play()} className={styles.playButton}>
                            🎶 Play Preview
                        </button>
                    </div>
                ) : (
                    <div className={styles.embededContainer}>
                        <h3>Play on Spotify:</h3>
                        <iframe
                            src={`https://open.spotify.com/embed/track/${songId}`}
                            width='300'
                            height='80'
                            frameBorder="0"
                            allow='encrypted-media'
                            title='Spotify Player'
                        ></iframe>
                    </div>
                )}

                {/* Back and Like actions */}
                <div className={styles.actions}>
                    <Link to="/search" className={styles.backButton}>⬅ Back</Link>
                    <button onClick={like} className={styles.likeButton}>❤️ {likes < 2 ? 'Like' : 'Likes'}: {likes}</button>
                </div>
            </div>
        </div>
    );
}

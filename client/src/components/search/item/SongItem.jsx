import { Link } from "react-router";
import styles from "./SongItem.module.css";

export default function SongItem({
    id,
    name,
    artists,
    album
}) {
   
    return (
        <li key={id} className={styles.songItem}>
            <img
                src={album.images[0].url}
                alt={name}
                className={styles.albumImage}
            />
            <div className={styles.songDetails}>
                <div className={styles.songName}>{name}</div>
                <div className={styles.artistName}>{artists[0].name}</div>
                <div className={styles.albumName}>{album.name}</div>
            </div>
            <Link to={`/${id}/details`} >Details</Link>
        </li>
    )
}
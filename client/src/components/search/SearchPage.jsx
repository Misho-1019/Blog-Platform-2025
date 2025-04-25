import { useState } from "react";

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
            console.log(data.tracks.items);
            
            setSongs(data.tracks.items)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching songs:', err);
            setLoading(false)
        }
    }

    return (
        <div>
            <h1>Search for Songs</h1>
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search for songs, artists, albums..."/>
            <button onClick={handleSearch}>Search</button>

            {loading && <p>Loading...</p>}

            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        <img src={song.album.images[0].url} alt={song.name} width={50}/>
                        <div>{song.name}</div>
                        <div>{song.artists[0].name}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
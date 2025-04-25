import { json, Router } from "express";

const spotifyRouter = Router();

spotifyRouter.get('/callback', async (req, res) => {
    const code = req.query.code;

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUri = 'http://127.0.0.1:5173/callback';

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
            },
            body: new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirectUri,
            })
        })

        const data = await response.json();

        if (!response.ok) {
            console.error('Error from Spotify:', data);
            return res.status(500).json({ error: 'Failed to get access token from Spotify'})
        }

        const { access_token, refresh_token } = data;

        console.log('Access Token:', access_token);
        res.json({ access_token, refresh_token })
        
    } catch (err) {
        console.error('Fetch error:', err);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

spotifyRouter.get('/songs', async (req, res) => {
    const accessToken = req.query.access_token;

    if (!accessToken) {
        return res.status(400).json({ error: 'Access token required!' })
    }

    try {
        const response = await fetch('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        })

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json(data)
        }

        res.json(data)
    } catch (err) {
        console.error('Error fetching songs:', err);
        res.status(500).json({ error: 'Failed to fetch songs from spotify' })
    }
})

export default spotifyRouter;
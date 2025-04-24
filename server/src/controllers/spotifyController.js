import { json, Router } from "express";

const spotifyRouter = Router();

spotifyRouter.get('/callback', async (req, res) => {
    const code = req.query.code;

    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const redirectUri = 'https://localhost:3030/callback';

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

export default spotifyRouter;
import { useEffect, useState } from "react";

export function useLikes(songId) {
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        const storedLikes = localStorage.getItem(`likes-${songId}`)

        if (storedLikes) {
            setLikes(Number(storedLikes))
        }
    }, [songId])

    const like = () => {
        const newLikes = likes + 1;
        setLikes(newLikes)
        localStorage.setItem(`likes-${songId}`, newLikes)
    }

    return {
        likes, like
    }
}
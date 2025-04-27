import { Link, useParams } from 'react-router';
import styles from './CommentsPage.module.css';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

export default function CommentsPage() {
    const {songId} = useParams()
    const { username } = useAuth()
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newComment.trim() === '') return;

        const comment = {
            id: Date.now(),
            text: newComment,
        }

        setComments((prevComments) => [...prevComments, comment])
        setNewComment('')
    }

    return (
        <div className={styles.commentsContainer}>
            <h1 className={styles.pageTitle}>Comments</h1>

            <div className={styles.commentsList}>
                {comments.length === 0 ? (
                    <p className={styles.noComments}>No comments yet. Be the first!</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className={styles.comment}>
                            {username}: {comment.text}
                        </div>
                    ))
                )}
            </div>

            <form className={styles.commentForm} onSubmit={handleSubmit}>
                <textarea
                    className={styles.textArea}
                    placeholder="Write your comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit" className={styles.submitButton}>Submit Comment</button>
            </form>

            <Link to={`/${songId}/details`} className={styles.backButton}>⬅ Back to Home</Link>
        </div>
    );
}
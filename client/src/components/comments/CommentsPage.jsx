import { Link, useParams } from 'react-router';
import styles from './CommentsPage.module.css';

export default function CommentsPage() {
    const {songId} = useParams()
    
    return (
        <div className={styles.commentsContainer}>
            <h1 className={styles.pageTitle}>Comments</h1>

            <div className={styles.commentsList}>
                <p className={styles.noComments}>No comments yet. Be the first!</p>
            </div>

            <form className={styles.commentForm}>
                <textarea
                    className={styles.textArea}
                    placeholder="Write your comment..."
                    disabled
                />
                <button type="button" className={styles.submitButton} disabled>Submit Comment</button>
            </form>

            <Link to={`/${songId}/details`} className={styles.backButton}>⬅ Back to Home</Link>
        </div>
    );
}
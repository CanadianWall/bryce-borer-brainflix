import './Comment.scss'

function Comment(props) {
    return (
        <section className="comment-card">
            <div className="comment-card__name">
                {props.commentName}
            </div>

            <div className="comment-card__date">
                {formatDate(props.commentDate)}
            </div>
            <div className="comment-card__content">
                {props.commentContent}
            </div>
        </section>
    );
}

function formatDate(oldDate) {
    const newDate = new Date(oldDate);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${month}/${day}/${year}`;
}

export default Comment

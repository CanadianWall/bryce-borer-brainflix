import './Comment.scss'

function Comment(props) {
    return (
        <>
        <div className="comment-card--divider"></div>
        <section className="comment-card">
            <div className="comment-card__avatar"></div>
            <div className="comment-card--wrapper">
            <div className="comment-card__top">
                <div className="comment-card__top__name">
                    {props.commentName}
                </div>

                <div className="comment-card__top__date">
                    {formatDate(props.commentDate)}
                </div>
            </div>
            <div className="comment-card__content">
                {props.commentContent}
            </div>
            
            </div>
            
        </section>
        
        </>
    );
}

function formatDate(oldDate) {
    const newDate = new Date(oldDate);
    const day = pad(newDate.getDate());
    const month = pad(newDate.getMonth() + 1);
    const year = newDate.getFullYear();
    return `${month}/${day}/${year}`;
}

function pad(n) {
    return (n < 10) ? ("0" + n) : n;
}

export default Comment

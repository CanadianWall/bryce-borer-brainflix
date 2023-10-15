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
    const day = pad(newDate.getDate());
    const month = pad(newDate.getMonth() + 1);
    const year = newDate.getFullYear();
    return `${month}/${day}/${year}`;
  }
  
  function pad(n) {
    return (n < 10) ? ("0" + n) : n;
  }

export default Comment

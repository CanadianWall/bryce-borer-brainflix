import { timeSince } from '../Description/Description';
import './Comment.scss'

function Comment(props) {
    return (
        <>
        <div className="comment-card--divider"></div>
        <section className="comment-card">
            <div className="comment-card__avatar"></div>
            <div className="comment-card--wrapper">
            <div className="comment-card__top">
                <h3 className="comment-card__top__name">
                    {props.commentName}
                </h3>

                <h5 className="comment-card__top__date">
                    {timeSince(props.commentDate)}
                </h5>
            </div>
            <p className="comment-card__content">
                {props.commentContent}
            </p>
            
            </div>
            
        </section>
        
        </>
    );
}
export default Comment

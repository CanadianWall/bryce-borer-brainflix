import commentIcon from "../../assets/icons/add_comment.svg"
import './CommentSection.scss'
import Comment from '../Comment/Comment'
import murugeAvatar from "../../assets/images/Mohan-muruge.jpg"

function CommentSection(props) {

    const submitComment = (event) => {
        event.preventDefault();

        const newComment = {
            content: event.target.content.value,
            title: event.target.title.value
        }
        props.addComment(newComment);
    }
    console.log(props.mainVideoData.length)
    return (
        <>
            <h3 className="comment-total">{props.mainVideoData.length} Comments</h3>
            <div className="comment--wrapper">
            <div className="comment--avatar">
                <img className="avatar" src={murugeAvatar} alt="mohan muruge" />
                </div>
            <div className="comment">
                <form
                    className="comment__form"
                    onSubmit={submitComment}>

                    <div className="comment__form__content--wrapper">
                    <label
                        className="comment__form__content"
                        htmlFor="content">
                        JOIN THE CONVERSATION<br />
                    </label>
                    <textarea className="comment__form__input"
                        name="content"
                        placeholder="Add a new comment"
                        id="content" />
                    </div>
                    <button className="comment__button">
                        
                        <div className="comment__button--icon--wrapper">
                        <img className="comment__button--icon"
                            src={commentIcon}
                            alt="comment button" />
                        </div>
                        
                        <div className="comment__button--text">
                        COMMENT
                        </div>
                        
                        </button>
                </form>
                </div>
            </div>

            <section className="comment-list">

                {props.mainVideoData.map((commentCard, index) => (
                    <Comment
                        key={index}
                        commentId={commentCard.id}
                        commentName={commentCard.name}
                        commentContent={commentCard.comment}
                        commentLikes={commentCard.likes}
                        commentDate={commentCard.timestamp}
                    />
                ))}
            </section>
        </>
    );
}

export default CommentSection

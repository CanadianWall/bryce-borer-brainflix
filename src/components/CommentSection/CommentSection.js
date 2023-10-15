import commentIcon from "../../assets/icons/add_comment.svg"
import './CommentSection.scss'
import Comment from '../Comment/Comment'

function CommentSection(props) {

    const submitComment = (event) => {
        event.preventDefault();

        const newComment = {
            content: event.target.content.value,
            title: event.target.title.value
        }
        props.addComment(newComment);
    }

    return (
        <>
            <form
                className="card-form"
                onSubmit={submitComment}>
                <label
                    className="card-form__title"
                    htmlFor="title">
                    Title:
                </label>
                <input
                    name="title"
                    id="title" />
                <label
                    className="card-form__content"
                    htmlFor="content">
                    Content:
                </label>
                <input
                    name="content"
                    id="content" />
                <button className="comment__button">
                    <img className="comment__button--icon"
                        src={commentIcon}
                        alt="comment button" />
                    COMMENT</button>
            </form>

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

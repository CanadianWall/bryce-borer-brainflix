import { API_URL_NEW, timeSince } from '../../data/utils';
import './Comment.scss'
import deleteIcon from "../../assets/icons/icon-delete.svg"
import axios from 'axios';


function Comment(props) {

    const deleteComment = () => {

        axios.delete(`${API_URL_NEW}videos/${props.mainVideo.id}/comments/${props.commentId}`)
        .then((response) => {
            // copies the comments with new comment appended
            const commentFilter = props.mainVideo.comments.filter((e) => {
                return e.id!== response.data.id
            })
            
            // copies mainVideo object with new comment
            const commentFilterObj = {
                ...props.mainVideo
            }

            commentFilterObj.comments = commentFilter
            props.setMainVideo(commentFilterObj)           
        })
        .catch((error) => console.log(error))
    }

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
                        <img
                        onClick={deleteComment}
                            className="comment-card__delete-icon"
                            src={deleteIcon}
                            alt="delete button" />
                </div>

            </section>
        </>
    );
}
export default Comment

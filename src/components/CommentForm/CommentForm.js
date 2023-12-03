import './CommentForm.scss'
import commentIcon from "../../assets/icons/add_comment.svg"
import murugeAvatar from "../../assets/images/Mohan-muruge.jpg"
import axios from 'axios';
import { API_URL_NEW } from '../../data/utils';


function CommentForm(props) {

const submitComment = (event) => {
        event.preventDefault();

        const newComment = {
            name: "Bryce Borer",
            comment: event.target.content.value
        }

        axios.post(`${API_URL_NEW}videos/${props.mainVideo.id}/comments`, newComment)
        .then((response) => {
            // copies the comments with new comment appended
            const mainVideoTemp = [...props.mainVideo.comments, response.data]

            // copies mainVideo object with new comment
            const mainVideoTempObj = {
                ...props.mainVideo
            }

            mainVideoTempObj.comments = mainVideoTemp
            props.setMainVideo(mainVideoTempObj)           
        })
        .catch((error) => console.log(error))

        event.target.content.value = ''
    }
  

    return (
        <>
            <h3 className="comment-total">{props.mainVideo.length} Comments</h3>
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
                        <button type="submit" className="comment__button">
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
        </>
    );
}

export default CommentForm

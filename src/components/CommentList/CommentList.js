import Comment from '../Comment/Comment'

function CommentList(props) {
    props.mainVideo.comments.sort((a, b) => b.timestamp - a.timestamp)

    return (
        <section>
            {props.mainVideo.comments.map((commentCard, index) => (
                <Comment
                    key={index}
                    commentId={commentCard.id}
                    commentName={commentCard.name}
                    commentContent={commentCard.comment}
                    commentLikes={commentCard.likes}
                    commentDate={commentCard.timestamp}
                    mainVideo = {props.mainVideo}
                    setMainVideo={props.setMainVideo}
                />
            ))}
        </section>
    );
}

export default CommentList

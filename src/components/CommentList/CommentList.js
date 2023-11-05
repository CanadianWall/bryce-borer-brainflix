import Comment from '../Comment/Comment'

function CommentList(props) {
    return (
        <section>
            {props.mainVideo.map((commentCard, index) => (
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
    );
}

export default CommentList

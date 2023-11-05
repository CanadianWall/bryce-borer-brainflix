import Comment from '../Comment/Comment'
import { useEffect, useState } from 'react';

function CommentList(props) {
    props.mainVideo.sort((a, b) => b.timestamp - a.timestamp)

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

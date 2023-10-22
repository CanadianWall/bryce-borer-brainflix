import './VideoCard.scss'

function VideoCard(props) {
  return (
      <div className="video-card"
        onClick={() => props.changeMainVideoData(props.videoCardId)}
      >
        <img className="video-card__image" src={props.videoImage} />

        <div className="video-card__title-and-channel">
          <h3 className="video-card__title-and-channel__title">
            {props.videoTitle}
          </h3>

          <p className="video-card__title-and-channel__channel">
            {props.videoChannel}
          </p>
        </div>
      </div>
  );
}

export default VideoCard;
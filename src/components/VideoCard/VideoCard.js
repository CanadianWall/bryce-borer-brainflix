import './VideoCard.scss'

function VideoCard(props) {
  // console.log(props.videoTitle)
  return (

    <>

      <div className="video-card"
        onClick={() => props.changeMainVideoData(props.videoCardId)}
      >
        <img className="video-card__image" src={props.videoImage} />

        <div className="video-card__title-and-channel">
          <h2 className="video-card__title-and-channel__title">
            {props.videoTitle}
          </h2>

          <h3 className="video-card__title-and-channel__channel">
            {props.videoChannel}
          </h3>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
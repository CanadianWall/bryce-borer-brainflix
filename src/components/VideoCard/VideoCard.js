import './VideoCard.scss'

function VideoCard(props) {
// console.log(props.videoTitle)
  return (

    <>
    
    <div className="video-card"
    onClick={() => props.changeMainVideoData(props.videoCardId)}
    >
      <img className="video-card__image" src={props.videoImage}/>

      <div className="video-card__title-and-channel">
      <div className="video-card__title-and-channel__title">
      {props.videoTitle}
      </div>

      <div className="video-card__title-and-channel__channel">
      {props.videoChannel}
      </div>
      </div>
    </div>
    </>
  );
}

export default VideoCard;
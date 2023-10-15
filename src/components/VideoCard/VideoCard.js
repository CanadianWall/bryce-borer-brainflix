import './VideoCard.scss'

function VideoCard(props) {
// console.log(props.videoTitle)
  return (

    <div className="videoCard"
    onClick={() => props.changeMainVideoData(props.videoCardId)}
    >
      <img className="videoCard__image" src={props.videoImage}/>

      <div className="videoCard__title">
      {props.videoTitle}
      </div>

      <div className="videoCard__channel">
      {props.videoChannel}
      </div>
    </div>
  );
}

export default VideoCard;
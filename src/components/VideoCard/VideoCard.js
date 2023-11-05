import './VideoCard.scss'
import { Link } from 'react-router-dom'

function VideoCard(props) {
  const to = '/videos/' + props.videoCardId;

  return (
    <Link to= {to} className="video-card--link">
      <div className="video-card">
        <img className="video-card__image" src={props.videoImage} alt={props.videoTitle} />
        <div className="video-card__title-and-channel">
          <h3 className="video-card__title-and-channel__title">
            {props.videoTitle}
          </h3>

          <p className="video-card__title-and-channel__channel">
            {props.videoChannel}
          </p>
        </div>
      </div>
      </Link>
  );
}

export default VideoCard;
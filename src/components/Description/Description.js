import './Description.scss'
import likesIcon from "../../assets/icons/likes.svg"
import viewsIcon from "../../assets/icons/views.svg"
import { timeSince } from '../../data/utils';

function Description(props) {
  const { mainVideoData } = props
  return (
    <div className="description--wrapper">
      <h1 className="description--title">{mainVideoData.title}</h1>
      <div className="description--divider--mobile-only"></div>
      <div className="description">

        <div className="description__author-and-date">
          <h3 className="description__author-and-date--author">By {mainVideoData.channel}</h3>
          <h5 className="description__author-and-date--date">{timeSince(mainVideoData.timestamp)}</h5>
        </div>

        <div className="description__viewsAndLikes">
          <h5 className="description__viewsAndLikes__views">
            <img className="description__viewsAndLikes__views--icon"
              src={viewsIcon}
              alt="views icon" />
            {mainVideoData.views}
          </h5>

          <h5 className="description__viewsAndLikes__likes">
            <img className="description__viewsAndLikes__likes--icon"
              src={likesIcon}
              alt="likes icon" />
            {mainVideoData.likes}
          </h5>
        </div>
      </div>
      <div className="description--divider"></div>
      <div className="description--divider--mobile"></div>
      <p className="description__content">{mainVideoData.description}</p>
    </div>
  );
}

export default Description;
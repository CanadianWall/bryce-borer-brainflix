import './Description.scss'
import likesIcon from "../../assets/icons/likes.svg"
import viewsIcon from "../../assets/icons/views.svg"
import { timeSince } from '../../data/utils';

function Description(props) {

  const { mainVideo } = props
  return (
    <div className="description--wrapper">
      <h1 className="description--title">{mainVideo.title}</h1>
      <div className="description--divider--mobile-only"></div>
      <div className="description">

        <div className="description__author-and-date">
          <h3 className="description__author-and-date--author">By {mainVideo.channel}</h3>
          <h5 className="description__author-and-date--date">{timeSince(mainVideo.timestamp)}</h5>
        </div>

        <div className="description__viewsAndLikes">
          <h5 className="description__viewsAndLikes__views">
            <img className="description__viewsAndLikes__views--icon"
              src={viewsIcon}
              alt="views icon" />
            {mainVideo.views}
          </h5>

          <h5 className="description__viewsAndLikes__likes">
            <img className="description__viewsAndLikes__likes--icon"
              src={likesIcon}
              alt="likes icon" />
            {mainVideo.likes}
          </h5>
        </div>
      </div>
      <div className="description--divider"></div>
      <div className="description--divider--mobile"></div>
      <p className="description__content">{mainVideo.description}</p>
    </div>
  );
}

export default Description;
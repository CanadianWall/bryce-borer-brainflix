import './Description.scss'
import likesIcon from "../../assets/icons/likes.svg"
import viewsIcon from "../../assets/icons/views.svg"


function Description(props) {
  const { mainVideoData } = props
  return (
    // JSX
    <div className="description--wrapper">
      <h1 className="description--title">{mainVideoData.title}</h1>
      <div className="description--divider--mobile-only"></div>
      <div className="description">

        <div className="description__author-and-date">
          <h3 className="description__author-and-date--author">By {mainVideoData.channel}</h3>
          <h5 className="description__author-and-date--date">{formatDate(mainVideoData.timestamp)}</h5>
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
      {/*Not sure why the mobile divider doesn't show up on the page*/}
      <div className="description--divider"></div>
      <div className="description--divider--mobile"></div>
      <div className="description__content">{mainVideoData.description}</div>
    </div>
  );
}

function formatDate(oldDate) {
  const newDate = new Date(oldDate);
  const day = pad(newDate.getDate());
  const month = pad(newDate.getMonth() + 1);
  const year = newDate.getFullYear();
  return `${month}/${day}/${year}`;
}

function pad(n) {
  return (n < 10) ? ("0" + n) : n;
}
export default Description;
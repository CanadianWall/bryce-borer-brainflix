import './Description.scss'
import likesIcon from "../../assets/icons/likes.svg"

function Description(props) {
  const { mainVideoData } = props
  return (
    // JSX
    <div className="description--wrapper">
        <h1>{mainVideoData.title}</h1>
        <div className="description--divider"></div>
        <div className="description">

          <div className="description__authorAndDate">
            <h3 className="description__authorAndDate--author">By {mainVideoData.channel}</h3>
            <h3 className="description__authorAndDate--date">{mainVideoData.timestamp}</h3>
          </div>

          <div className="description__viewsAndLikes">
            <h3 className="description__viewsAndLikes--views">{mainVideoData.views}</h3>
            <h3 className="description__viewsAndLikes--likes">{mainVideoData.likes}</h3>
          </div>
        </div>
        {/*Not sure why the mobile divider doesn't show up on the page*/}
        <div className="description--divider"></div>
        <div className="description--divider--mobile"></div>
        <div className="description__content">{mainVideoData.description}</div>

      </div>
  );
}

export default Description;
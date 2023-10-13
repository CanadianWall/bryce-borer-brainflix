import './Description.scss'
import likesIcon from "../../assets/icons/likes.svg"

const videoObject = {
  title: "BMX Rampage: 2021 Highlights",
  video: "video link",
  author: "Red Crow",
  videoDate: "07/11/2021",
  views: "1,001,023",
  likes: "110,985",
  videoDescription: `On a gusty day in Southern Utah, a group of 25 
  daring mountain bikers blew the doors off what
  is possible on two wheels, unleashing some of
  the biggest moments the sport has ever seen.
  While mother nature only allowed for one full run
  before the conditions made it impossible to ride,
  that was all that was needed for event veteran
  Kyle Strait, who won the event for the second
  time -- eight years after his first Red Cow
  Rampage title`,
  videoComments: {
    commentName: "Michael Lyons", 
    commentDate: "08/09/2021",
    commentContent: `They BLEW the ROOF off at their last
    event, once everyone started figuring
    out they were going. This is still simply
    the greatest opening of an event I have
    EVER witnessed.`
  }
}

function Description() {
  return (
    // JSX
    <>
    <h1>{videoObject.title}</h1>
    <div className="description--divider"></div>
    <div className="description">
      
      

      <div className="description__authorAndDate">
        <h3 className="description__authorAndDate--author">By {videoObject.author}</h3>
        <h3 className="description__authorAndDate--date">{videoObject.videoDate}</h3>
      </div>

      <div className="description__viewsAndLikes">
        <h3 className="description__viewsAndLikes--views">{videoObject.views}</h3>
        <h3 className="description__viewsAndLikes--likes">{videoObject.likes}</h3>
      </div>
      </div>
      {/*Not sure why the mobile divider doesn't show up on the page*/}
      <div className="description--divider"></div>
      <div className="description--divider--mobile"></div>
      <div className="description__content">{videoObject.videoDescription}</div>
    </>
  );
}

export default Description;
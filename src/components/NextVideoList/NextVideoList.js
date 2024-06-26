import './NextVideoList.scss'
import VideoCard from '../VideoCard/VideoCard'

function NextVideoList(props) {

  if (!props.videos) {
    return null
  } else {
    return (
      <section className="video-list">
        <div className="video-list--divider"></div>
        <h3 className="video-list__title"> NEXT VIDEOS </h3>

        {props.videos.filter((videoCard) => {
          return videoCard.id !== props.mainVideoId
        }).map((videoCard, index) => (
          <VideoCard
            key={index}
            videoTitle={videoCard.title}
            videoChannel={videoCard.channel}
            videoImage={videoCard.image}
            videoCardId={videoCard.id}
          />
        ))}
      </section>
    );
  }
}

export default NextVideoList;
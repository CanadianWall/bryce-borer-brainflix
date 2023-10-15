import './NextVideoList.scss'
import VideoCard from '../VideoCard/VideoCard'
import videoList from '../../data/videos.json';
import { useState } from 'react'

function NextVideoList(props) {
  const [videoContent, setVideo] = useState(videoList)
  return (
    // JSX

    <section className="video-list">
      {videoContent.filter((videoCard) =>{
          return videoCard.id !== props.mainVideoId
      }).map((videoCard, index) => (
        <VideoCard
        key = {index}
        changeMainVideoData={props.changeMainVideoData}
        videoTitle={videoCard.title} 
        videoChannel={videoCard.channel}
        videoImage={videoCard.image}
        videoCardId={videoCard.id}
        />
      ))}
    </section>

  );
}

export default NextVideoList;
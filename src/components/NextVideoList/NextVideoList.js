import './NextVideoList.scss'
import VideoCard from '../VideoCard/VideoCard'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL_NEW } from '../../data/utils';

function NextVideoList(props) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [videos, setVideos] = useState(props);

  const fetchAllVideos = () =>
    axios
      .get(`${API_URL_NEW}videos`)
      .then((response) => {
        setVideos(response);
        setHasLoaded(true)
      });

  useEffect(() => {
    fetchAllVideos();
  }, []);

  if (!hasLoaded) {return null}
    return (
      <section className="video-list">
        <div className="video-list--divider"></div>
        <h3 className="video-list__title"> NEXT VIDEOS </h3>

        {videos.data.filter((videoCard) => {
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

export default NextVideoList;
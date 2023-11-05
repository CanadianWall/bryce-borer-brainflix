import './NextVideoList.scss'
import VideoCard from '../VideoCard/VideoCard'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL, API_KEY } from '../../data/utils';

function NextVideoList(props) {
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState(props);

  const fetchAllVideos = () =>
    axios
      .get(`${API_URL}videos${API_KEY}`)
      .then((response) => {
        setVideos(response);
        setLoading(true)
      });

  useEffect(() => {
    fetchAllVideos();
  }, []);

  if (loading) {
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
}

export default NextVideoList;
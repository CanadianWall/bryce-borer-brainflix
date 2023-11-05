import './HomePage.scss';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../data/utils';
import MainVideo from '../../components/MainVideo/MainVideo';
import Description from '../../components/Description/Description';
import NextVideoList from '../../components/NextVideoList/NextVideoList';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';

function HomePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [videos, setVideos] = useState();
    const [mainVideo, setMainVideo] = useState();
    const { videoId } = useParams();

    const getVideoId = (id) => {
        axios
            .get(`${API_URL}videos/${id}${API_KEY}`)
            .then((response) => {
                setMainVideo(response.data)
                setHasLoaded(true)
            })
    }
    useEffect(() => {
        if (videoId) {
            getVideoId(videoId)
        } else {
            getVideoId("84e96018-4022-434e-80bf-000ce4cd12b8")
        }
    }, [videoId]);

    const fetchAllVideos = () =>
        axios
            .get(`${API_URL}videos${API_KEY}`)
            .then((response) => {
                setVideos(response);
            });

    useEffect(() => {
        fetchAllVideos();
    }, []);

    const changeMainVideo = (id) => {
        const newVideo = videos.find((video) => video.id === id)
        setMainVideo(newVideo)
    }

    if (!hasLoaded) { return null }

    return (
        <div className="HomePage">
            <MainVideo mainVideo={mainVideo} />
            <div className="video-content">
                <div className="video-content__main">
                    <Description mainVideo={mainVideo} />
                    <CommentForm mainVideo={mainVideo} setMainVideo={setMainVideo}/>
                    <CommentList mainVideo={mainVideo.comments} />

                </div>
                <div className="video-content__next">
                    <NextVideoList changeMainVideo={changeMainVideo} mainVideoId={mainVideo.id} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
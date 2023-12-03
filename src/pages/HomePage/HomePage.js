import './HomePage.scss';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL_NEW } from '../../data/utils';
import MainVideo from '../../components/MainVideo/MainVideo';
import Description from '../../components/Description/Description';
import NextVideoList from '../../components/NextVideoList/NextVideoList';
import CommentForm from '../../components/CommentForm/CommentForm';
import CommentList from '../../components/CommentList/CommentList';

function HomePage() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [videos, setVideos] = useState();
    const [mainVideo, setMainVideo] = useState();
    let { videoId } = useParams();

    const getVideoId = (id) => {
        axios
            .get(`${API_URL_NEW}videos/${id}`)
            .then((res) => {
                setMainVideo(res.data)
                setHasLoaded(true)
            })
    }

    useEffect(() => {

        if (videoId) {
            getVideoId(videoId)
        }

        else {
            axios
                .get(`${API_URL_NEW}videos`)
                .then((res) => {
                    videoId = res.data[0].id
                })
                .then(()=>{
                    getVideoId(videoId)
                })
        }
    }, [videoId]);

    const fetchAllVideos = () =>
        axios
            .get(`${API_URL_NEW}videos`)
            .then((res) => {
                setVideos(res.data);
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
                    <CommentForm mainVideo={mainVideo} setMainVideo={setMainVideo} />
                    <CommentList mainVideo={mainVideo} setMainVideo={setMainVideo} />

                </div>
                <div className="video-content__next">
                    <NextVideoList changeMainVideo={changeMainVideo} mainVideoId={mainVideo.id} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
import './HomePage.scss';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL_NEW, API_KEY } from '../../data/utils';
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
            // .get(`${API_URL}videos/${id}${API_KEY}`)
            .get(`${API_URL_NEW}videos/${id}`)
            .then((res) => {
                setMainVideo(res.data)
                console.log("set main video: ", res)
                setHasLoaded(true)
            })
    }
    useEffect(() => {

        if (videoId) {
            getVideoId(videoId)
        } 
        else {
            //************how do I made this dynamic and not hard-coded?***********
            getVideoId("84e96018-4022-434e-80bf-000ce4cd12b8")
        }
    }, [videoId, hasLoaded]);

    const fetchAllVideos = () =>
        axios
            .get(`${API_URL_NEW}videos`)
            .then((res) => {
                
                setVideos(res.data);
                console.log("fetch video: ", res.data)
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
import './HomePage.scss';
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../data/utils';
import MainVideo from '../../components/MainVideo/MainVideo';
import Description from '../../components/Description/Description';
import NextVideoList from '../../components/NextVideoList/NextVideoList';
import CommentSection from '../../components/CommentSection/CommentSection';
import mainVideoDataList from '../../data/video-details.json';


function HomePage({ username }) {

    const [videos, setVideos] = useState([]);
    const [mainVideoData, setMainVideo] = useState(mainVideoDataList[0])
    // const [mainVideoData, setMainVideo] = useState()
    // const [videoId, setVideoId] = useState(["84e96018-4022-434e-80bf-000ce4cd12b8"]);

    const {videoId} = useParams();

    const getVideoId = (id) => {
        axios
        .get(`${API_URL}videos/${id}${API_KEY}`)
        .then((response) => {
            console.log("getVideoId response: ", response)
        })
    }
    useEffect(() => {
        if(videoId){
            getVideoId(videoId)
        } else {
            getVideoId("84e96018-4022-434e-80bf-000ce4cd12b8")
        }
    })

    const fetchAllVideos = () =>
        axios
            .get(`${API_URL}videos${API_KEY}`)
            .then((response) => {
                console.log('response', response.data);
                setVideos(response);
            });

    useEffect(() => {
        fetchAllVideos();
    }, []);

    const changeMainVideoData = (id) => {
        const newVideo = mainVideoDataList.find((video) => video.id === id)
        setMainVideo(newVideo)
    }


    return (
        <div className="HomePage">
            <MainVideo mainVideoData={mainVideoData} />
            <div className="video-content">
                <div className="video-content__main">
                    <Description mainVideoData={mainVideoData} />
                    <CommentSection mainVideoData={mainVideoData.comments} />
                </div>
                <div className="video-content__next">
                    <NextVideoList changeMainVideoData={changeMainVideoData} mainVideoId={mainVideoData.id} />
                </div>
            </div>
        </div>
    )
}

export default HomePage
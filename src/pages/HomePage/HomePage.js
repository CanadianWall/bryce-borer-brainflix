import './HomePage.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react';
import MainVideo from '../../components/MainVideo/MainVideo';
import Description from '../../components/Description/Description';
import NextVideoList from '../../components/NextVideoList/NextVideoList';
import CommentSection from '../../components/CommentSection/CommentSection';
import mainVideoDataList from '../../data/video-details.json';


function HomePage({ username }) {
    const [mainVideoData, setMainVideo] = useState(mainVideoDataList[0])
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
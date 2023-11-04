// API Key: cd31aaaa-5c5c-4640-b6a0-97d0bccb3015

import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
// import MainVideo from './components/MainVideo/MainVideo';
// import Description from './components/Description/Description';
// import NextVideoList from './components/NextVideoList/NextVideoList';
// import CommentSection from './components/CommentSection/CommentSection';
import mainVideoDataList from './data/video-details.json';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';


function App() {
  const [mainVideoData, setMainVideo] = useState(mainVideoDataList[0])
  const changeMainVideoData = (id) => {
    const newVideo = mainVideoDataList.find((video) => video.id === id)
    setMainVideo(newVideo)
  }


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route
          path=":videoId"
          element={<HomePage />}
        />
        <Route path="*" element={<NotFoundPage />} ></Route>
      </Routes>


    </BrowserRouter>
  );

}

export default App;


{/* <div className="App">
      <Header />
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
    </div> */}
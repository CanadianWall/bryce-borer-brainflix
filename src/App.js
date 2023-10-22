import './App.scss';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import Description from './components/Description/Description';
import NextVideoList from './components/NextVideoList/NextVideoList';
import CommentSection from './components/CommentSection/CommentSection';
import mainVideoDataList from './data/video-details.json';
import { useState } from 'react';


function App() {
  const [mainVideoData, setMainVideo] = useState(mainVideoDataList[0])
  const changeMainVideoData = (id) => {
    const newVideo = mainVideoDataList.find((video) => video.id === id)
    setMainVideo(newVideo)
  }

  return (
    <div className="App">
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
    </div>
  );

}

export default App;
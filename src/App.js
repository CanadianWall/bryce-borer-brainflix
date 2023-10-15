import logo from './logo.svg';
import './app.scss';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import Description from './components/Description/Description';
import NextVideoList from './components/NextVideoList/NextVideoList';
import Comments from './components/Comments/Comments';
import mainVideoDataList from './data/video-details.json';
import { useState } from 'react';


function App() {
  const [ mainVideoData, setMainVideo ] = useState(mainVideoDataList[0])

  const changeMainVideoData = (id) => {
    const newVideo = mainVideoDataList.find((video) => video.id === id)
    setMainVideo(newVideo)
  }

  return (
    <div className="App">
      <Header/>
      <MainVideo mainVideoData = {mainVideoData}/>
      <Description mainVideoData = {mainVideoData}/>
      <Comments/>
      <NextVideoList changeMainVideoData={changeMainVideoData} mainVideoId = {mainVideoData.id}/>
    </div>
  );
}

export default App;

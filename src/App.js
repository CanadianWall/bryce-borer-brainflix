import logo from './logo.svg';
import './app.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import NextVideos from './components/NextVideos/NextVideos';
import Comments from './components/Comments/Comments';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Description/>
      <NextVideos/>
      <Comments/>
    </div>
  );
}

export default App;

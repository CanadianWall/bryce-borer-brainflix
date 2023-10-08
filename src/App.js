import logo from './logo.svg';
import './app.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import NextVideo from './components/NextVideo/NextVideo';
import NextVideoSection from './components/NextVideoSection/NextVideoSection';
import Comments from './components/Comments/Comments';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Description/>
      <NextVideo/>
      <NextVideoSection/>
      <Comments/>
    </div>
  );
}

export default App;

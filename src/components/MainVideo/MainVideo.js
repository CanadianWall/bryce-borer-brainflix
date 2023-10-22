import './MainVideo.scss'

function MainVideo(props) {
  const { mainVideoData } = props
  return (

    <section className="main-video">
      <div className="main-video__video">
        <video className="main-video__video"
        controls
        poster ={mainVideoData.image}
        // src={mainVideoData.video}
        >
        </video>
      </div>
    </section>
  );
}

export default MainVideo;

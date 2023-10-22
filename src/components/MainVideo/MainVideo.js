import './MainVideo.scss'

function MainVideo(props) {
  const { mainVideoData } = props
  return (

    <section className="mainVideo">
      <div className="mainVideo__video">
        <video className="mainVideo__video"
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

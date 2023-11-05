import './MainVideo.scss'

function MainVideo({mainVideo}) {
  return (
    <section className="main-video">
      <div className="main-video__video">
        <video className="main-video__video"
          controls
          poster={mainVideo.image}
          alt={mainVideo.title}
        >
        </video>
      </div>
    </section>
  );
}

export default MainVideo;

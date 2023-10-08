import './NextVideo.scss'

function NextVideo() {
    return (
      // JSX
         <header className="header">
      <nav className="header__links header__links--left">
        <a>Home</a> | <a>About</a> |
        <a>Contact</a>
      </nav>
      <div className="header__logo">Logo</div>
      <div className="header__links header__links--right">
        <input className="search" placeholder="Search..." />
        <p className="last-pressed"></p>
      </div>
    </header>
    );
  }

  export default NextVideo;
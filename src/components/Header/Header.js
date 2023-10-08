import './Header.scss'
// import "../../styles/partials/_global.scss"
import muruge from "../../assets/images/Mohan-muruge.jpg"
import play from "../../assets/icons/play.svg"
import upload from "../../assets/icons/upload.svg"
import search from "../../assets/icons/search.svg"

function Header() {
    return (
        // JSX
        <header className="header">
            <div className="header__logo">
                <div className="header__logo--wrapper">
                    <img className="header__logo--play"
                        src={play}
                        alt="play icon" />
                </div>
                <h2 className="header__logo--title">BrainFlix</h2>

            </div>
            <div className="header__content">
                <div className="header__content__search">
                    <input className="header__content__search--box"
                        type="text"
                        placeholder="         Search" />
                    <img className="header__content__search--icon"
                        src={search}
                        alt="search icon" />
                    <img className="avatar avatar--mobile"
                        src={muruge}
                        alt="mohan muruge" />
                </div>
                <div className="header__content__upload">
                    <button type="submit" className="header__content__upload__button">
                        <img className="header__content__upload__button--icon"
                            src={upload}
                            alt="upload button" />
                        UPLOAD</button>
                    <img className="avatar avatar--tablet"
                        src={muruge}
                        alt="mohan muruge" />
                </div>
            </div>
        </header>
    );
}

export default Header;
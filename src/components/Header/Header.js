import './Header.scss'
import murugeAvatar from "../../assets/images/Mohan-muruge.jpg"
import playIcon from "../../assets/icons/play.svg"
import uploadIcon from "../../assets/icons/upload.svg"
import searchIcon from "../../assets/icons/search.svg"

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <div className="header__logo--wrapper">
                    <img className="header__logo--play"
                        src={playIcon}
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
                        src={searchIcon}
                        alt="search icon" />
                    <img className="avatar avatar--mobile"
                        src={murugeAvatar}
                        alt="mohan muruge" />
                </div>

                <div className="header__content__upload">
                    <button type="submit" className="header__content__upload__button">
                        <div className="header__content__upload__button--icon-wrapper">
                        <img className="header__content__upload__button--icon"
                            src={uploadIcon}
                            alt="upload button" />
                        </div>
                        
                        <div className="header__content__upload__button--text">
                            UPLOAD
                            </div>
                        </button>
                        
                    <img className="avatar avatar--tablet"
                        src={murugeAvatar}
                        alt="mohan muruge" />
                </div>
            </div>
        </header>
    );
}

export default Header;
import './header.scss'

function Header() {
    return (
        // JSX
        <header class="header">
            <div class="header__logo">
                <a href="../../../public/index.html">
                    <h2 class="main-header__title">BrainFlix</h2>
                </a>
            </div>
            <div class="header__content">
                <div class="header__content__search">
                    <input type="text" placeholder="Search" />
                    <img class="avatar avatar--mobile"
                        src="../../assets/images/Mohan-muruge.jpg"
                        alt="mohan muruge" />
                </div>
                <div class="header__content__upload">
                    <button type="submit" class="button">UPLOAD</button>
                    <img class="avatar avatar--tablet"
                        src="../../assets/images/Mohan-muruge.jpg"
                        alt="mohan muruge" />
                </div>
            </div>
        </header>
    );
}

export default Header;
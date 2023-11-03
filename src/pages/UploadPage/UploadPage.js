import './UploadPage.scss';
import uploadPreview from "../../assets/images/Upload-video-preview.jpg"
import publishIcon from "../../assets/icons/publish.svg"

function UploadPage({ username }) {
    return (
        <section className="upload">
            <div className="upload--divider"></div>
            <h1>Upload Video</h1>
            <h3 className="upload__subtitle">VIDEO THUMBNAIL</h3>
            <img className="upload__preview-img"
                src={uploadPreview}
                alt="upload preview" />
            <div className="upload__form--wrapper">
                <label
                    className="upload__form__title"
                    htmlFor="content">
                    TITLE YOUR VIDEO<br />
                </label>
                <textarea className="upload__form__title--input"
                    name="content"
                    placeholder="Add a title to your video"
                    id="content" />
                <br />
                <label
                    className="upload__form__description"
                    htmlFor="content">
                    ADD A VIDEO DESCRIPTION<br />
                </label>
                <textarea className="upload__form__description--input"
                    name="content"
                    placeholder="Add a description to your video"
                    id="content" />
            </div>
            <div className="upload--divider--tablet"></div>
            <div className="upload__button">
            <button type="submit" className="upload__button__publish">
                <div className="upload__button__publish--icon-wrapper">
                    <img className="upload__button__publish--icon"
                        src={publishIcon}
                        alt="upload button" />
                </div>

                <div className="upload__button__publish--text">
                    PUBLISH
                </div>
            </button>
            <button type="submit" className="upload__button__cancel">

                <div className="upload__button__cancel--text">
                    CANCEL
                </div>
            </button>
            </div>

        </section>
    )
}

export default UploadPage
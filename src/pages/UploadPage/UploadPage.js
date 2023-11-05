import './UploadPage.scss';
import uploadPreview from "../../assets/images/Upload-video-preview.jpg"
import publishIcon from "../../assets/icons/publish.svg"

function UploadPage() {
    return (
        <>
            <div className="upload--divider"></div>
            <section className="upload">
                <h1 className="upload--title">Upload Video</h1>
                <div className="upload--divider--tablet"></div>
                <div className="upload--main-wrapper">
                    <div className="upload--img-wrapper">
                        <h3 className="upload__subtitle">VIDEO THUMBNAIL</h3>
                        <img className="upload__preview-img"
                            src={uploadPreview}
                            alt="upload preview" />
                    </div>

                    <div className="upload__form--wrapper">
                        <div className="upload__form__title--wrapper">
                            <label
                                className="upload__form__title"
                                htmlFor="content">
                                TITLE YOUR VIDEO<br />
                            </label>
                            <textarea className="upload__form__title--input"
                                name="content"
                                placeholder="Add a title to your video"
                                id="content" />
                        </div>

                        <div className='upload__form__description--wrapper'>
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
                    </div>
                </div>
                <div className="upload--divider--tablet"></div>
                <div className="upload__button">
                    <button type="submit" className="upload__button__publish">
                        <div className="upload__button__publish--icon-wrapper">
                            <img className="upload__button__publish--icon"
                                src={publishIcon}
                                alt="upload button" />
                        </div>

                        <h3 className="upload__button__publish--text">
                            PUBLISH
                        </h3>
                    </button>
                    <button type="submit" className="upload__button__cancel">

                        <h3 className="upload__button__cancel--text">
                            CANCEL
                        </h3>
                    </button>
                </div>
            </section>
        </>
    )
}

export default UploadPage
import './UploadPage.scss';
import uploadPreview from "../../assets/images/Upload-video-preview.jpg"
import publishIcon from "../../assets/icons/publish.svg"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { API_URL_NEW, API_KEY } from '../../data/utils';

function UploadPage() {
    let navigateFunction = useNavigate();
    const handleRedirect = () => {
        alert("Video Uploaded!")
        navigateFunction('/')
    }
    const submitUploadVideo = (event) => {
        event.preventDefault();

        const newVideo = {
            name: "Bryce Borer",
            comment: event.target.content.value,

            title: event.target.titleContent.value,
            description: event.target.descriptionContent.value,
            path:'../../assets/images/Upload-video-preview.jpg'
        }

        axios.post(`${API_URL_NEW}upload`, newVideo)
            .then((response) => {
                // copies the comments with new comment appended
                // const mainVideoTemp = [...props.mainVideo.comments, response.data]

                // // copies mainVideo object with new comment
                // const mainVideoTempObj = {
                //     ...props.mainVideo
                // }

                // mainVideoTempObj.comments = mainVideoTemp
                // props.setMainVideo(mainVideoTempObj)
            })
            .catch((error) => console.log(error))

        event.target.content.value = ''
    }
    return (
        <>
            <div className="upload--divider"></div>
            <form 
            className="upload"
            onSubmit={submitUploadVideo}>
                
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
                                name="titleContent"
                                placeholder="Add a title to your video"
                                id="titleContent" />
                        </div>

                        <div className='upload__form__description--wrapper'>
                            <label
                                className="upload__form__description"
                                htmlFor="content">
                                ADD A VIDEO DESCRIPTION<br />
                            </label>
                            <textarea className="upload__form__description--input"
                                name="descriptionContent"
                                placeholder="Add a description to your video"
                                id="descriptionContent" />
                        </div>
                    </div>
                </div>
                <div className="upload--divider--tablet"></div>
                <div className="upload__button">
                    <button
                        type="submit"
                        className="upload__button__publish"
                        onClick={handleRedirect}>
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
            </form>
        </>
    )
}

export default UploadPage


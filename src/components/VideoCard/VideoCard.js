import './VideoCard.scss'
import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

function VideoCard(props) {
  let navigateFunction = useNavigate();
  const handleRedirect = () => {
      navigateFunction('/')
  }
  let { videoId } = useParams();
  const to = '/videos/' + props.videoCardId;
  return (
    <Link to= {to} className="video-card--link">
      <div className="video-card"
        onClick={() => 
          props.changeMainVideoData(props.videoCardId)}
      >
        <img className="video-card__image" src={props.videoImage} alt={props.videoTitle} />

        <div className="video-card__title-and-channel">
          <h3 className="video-card__title-and-channel__title">
            {props.videoTitle}
          </h3>

          <p className="video-card__title-and-channel__channel">
            {props.videoChannel}
          </p>
        </div>
      </div>
      </Link>
  );
}

export default VideoCard;
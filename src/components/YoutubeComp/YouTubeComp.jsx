import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper card">
        <div className="img-thumb">
            <img src={props.img} alt="" />
            <p className="time">{props.time}</p>
        </div>
        <p clasName="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
    </div>
  )
}

export default YouTubeComp
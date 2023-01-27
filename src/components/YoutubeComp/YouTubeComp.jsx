import React from 'react';
import './YouTubeComp.css';

const YouTubeComp = (props) => {
  return (
      <div className="youtube-wrapper card">
          <div className="img-thumb">
              <img src={props.img} alt="" />
              <p className="time">{props.time}</p>
          </div>
              <p clasName="Judul">{props.title}</p>
              <p className="desc">{props.desc}</p>
      </div>
  )
}

YouTubeComp.defaultProps = {
  time : '00:00',
  title : 'Judul Tutorial Anda Disini',
  desc : 'xx x ditonton xx hari lalu'

}

export default YouTubeComp
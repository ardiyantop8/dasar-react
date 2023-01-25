import React from 'react';
import YouTubeComp from '../../components/YoutubeComp/YouTubeComp';
import '../../components/YoutubeComp/YouTubeComp.css';
import img1 from '../../assets/2.jpg';
import img2 from '../../assets/react.png';


class Home extends React.Component {
  render() {
      return (
        <div className="card mx-2 bg-slate-100">
            <h1 className="title px-2">Youtube Component</h1>
            <hr className="mx-2" /><br />
            <YouTubeComp time="7.14" title="Video Awal" desc="Tutorial Awal Component" img={img1}/>
            <YouTubeComp time="5.15" title="Video Kedua" desc="Tutorial StateLess Component" img={img1}/>
            <YouTubeComp time="6.16" title="Video Ketiga" desc="Tutorial StateFull Component" img={img2}/>
            <YouTubeComp time="8.16" title="Video Keempat" desc="Tutorial Props Part 1 React" img={img1}/>
            <YouTubeComp time="3.13" title="Video Kelima" desc="Tutorial Props Part 2 React" img={img2}/>
        </div>
    )
  }
}

export default Home
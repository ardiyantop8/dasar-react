import React, {Component} from 'react';
// import YouTubeComp from '../../components/YoutubeComp/YouTubeComp'; 
import '../../components/YoutubeComp/YouTubeComp.css';
// import img1 from '../../assets/2.jpg';
// import img2 from '../../assets/react.png';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost'


class Home extends Component {
  state = {
    showComponent:true
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState ({
    //     showComponent:false
    //   })
    // }, 15000)  /*untuk menghilangkan component dengna componentWillUnmount */
  }
  render() {
      return (
        <div className=" mx-2 bg-slate-100 ">
            {/* <h1 className="title px-2">Youtube Component</h1>
            <hr className="mx-2" /><br />
            <YouTubeComp time="7:14" title="Tutorial React JS - Bagian 1" desc="12k x ditonton 60 hari lalu" img={img1}/>
            <YouTubeComp time="5:15" title="Tutorial React JS - Bagian 2" desc="3k x ditonton 3 hari lalu" img={img1}/>
            <YouTubeComp time="6:16" title="Tutorial React JS - Bagian 3" desc="100 x ditonton 1 hari lalu" img={img2}/>
            <YouTubeComp time="8:16" title="Tutorial React JS - Bagian 4" desc="500 x ditonton 3 hari lalu" img={img1}/>
            <YouTubeComp  img={img2}/> */}
            
            {/* <p>Counter</p>
            <hr />
            <Product/> */}

            {/* <p>Life Cycle Component</p>
            <hr />
            {
              this.state.showComponent ?
              <LifeCycleComp></LifeCycleComp> : null
            } */}

            <p>Blog Post</p>
            <hr />
            <BlogPost></BlogPost>
        </div>

    )
  }
}

export default Home
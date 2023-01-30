import React, {Component, Fragment} from 'react'
import './BlogPost.css'
import Post from '../../components/Post/Post'
import axios from 'axios'

class BlogPost extends Component {
  state = {
    post: []
  }
  componentDidMount () {
    /* Fetch langsung */
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   // .then(json => console.log(json))
    //   .then(json => {
    //     this.setState({
    //       post:json
    //     })
    //   })
    /* END Fetch langsung */

    /* Axios*/
      // axios.get('https://jsonplaceholder.typicode.com/posts')
      axios.get('http://localhost:3004/posts')
      .then((result) => {
        console.log(result.data)
        this.setState({
          post:result.data
        })
      })
      .catch((error) => {
        alert(error);
      })
    /* End Axios*/
  }

  handleRemove = (data) => {
    console.log(data)
  }

  render() {
    return (
      <Fragment>
        <p className='section-title'>BlogPost</p>
        {/* <Post title= "title" desc="Desc"/> */}
        {
          this.state.post.map(post => {
            return <Post key={post.id} data={post} remove={this.handleRemove}/>
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost
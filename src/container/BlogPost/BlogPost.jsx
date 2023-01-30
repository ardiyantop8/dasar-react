import React, {Component, Fragment} from 'react'
import './BlogPost.css'
import Post from '../../components/Post/Post'
// import { getByTitle } from '@testing-library/react'

class BlogPost extends Component {
  state = {
    post: []
  }
  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => {
        this.setState({
          post:json
        })
      })
  }

  render() {
    return (
      <Fragment>
        <p className='section-title'>BlogPost</p>
        {/* <Post title= "title" desc="Desc"/> */}
        {
          this.state.post.map(post => {
            return <Post key={post.id} title= {post.title} desc={post.body}/>
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost
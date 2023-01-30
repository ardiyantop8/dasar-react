import React from 'react'

const Post = (props) => {
  return (
    <div className='post'>
        <div className="img-thumb">
            <img src="https://placeimg.com/200/200/tech" alt="dummy" />
        </div>
        <div className="content">
            <p className="title">{props.data.title}</p>
            <p className="desc">{props.data.body}</p>
            <button className='bg-red-500 hover:text-black text-white font-bold py-2 px-4 rounded m-6' onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>
    </div>
  )
}

export default Post
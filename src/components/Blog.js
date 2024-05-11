import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import PostDetail from './PostDetail';

const Blog = () => {
    const {posts}=useContext(AppContext);
    console.log("home page",posts)

  return (
    <div>

      {posts.map((post)=>{
        return <PostDetail key={post.id} post={post}/>
      })}
      
    </div>
  )
}

export default Blog

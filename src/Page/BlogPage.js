import React, { useContext, useEffect, useState } from 'react'
import { newBaseUrl } from '../baseUrl'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import PostDetail from '../components/PostDetail';
// import Blog from '../components/Blog';


function BlogPage() {

    const [blog,setBlog]=useState();
    const [relativeBlog,setRelativeBlog] =useState([]);
    const {loading,setLoading}=useContext(AppContext);

    const location =useLocation();
    const navigate =useNavigate()
    const blogId=location.pathname.split("/").at(-1);

   async function fetchRelativeBlog(){
    setLoading(true);
   const url=`${newBaseUrl}??blogId=${blogId}`

   console.log("url is blogid page");

   try{
    const res = await fetch(url);
    const data = await res.json();

    console.log("blog data", data);
    setBlog(data.blog);
    setRelativeBlog(data.relatedBlogs)
   }catch(error){
    console.log("blog id me error hai");
   };
   setLoading(false);

   }


   useEffect(()=>{
    if(blogId)
    fetchRelativeBlog()
   },[location.pathname])

  return (
    <div>
     <button 
     onClick={()=>{
        navigate(-1)
     }}>back</button> 

     {loading?(<p>Loading</p>):
      blog?( 
      <div>
        <PostDetail post ={blog}/>
        <h1>Relative Blog</h1>
        {relativeBlog.map((post)=>{
            return <PostDetail key={post.id} post={post}/>
        })}
        </div>
      
    ):
      
        (
            <div>
                <h1>No blog Found</h1>
            </div>
        )
     
     }
      
    </div>
  )
}

export default BlogPage


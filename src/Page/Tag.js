import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

function Tag() {
  
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    console.log(tag);
  return (
    <div>
        {/* <Header/> */}
        <div>
            <button 
            onClick={() => navigation(-1)}
            >
                back
            </button>
            <h2>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blog/>
        {/* <Pagination/> */}
      
    </div>
  )
}

export default Tag

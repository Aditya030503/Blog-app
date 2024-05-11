import React from 'react'
import Header from '../components/Header';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

function Category() {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ");

  return (
    <div>
      {/* <Header/> */}
      <div>
        <button
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <h2> 
            Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blog/>
      {/* <Pagination/> */}
    </div>
  )
}

export default Category
